import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

type FileInfo = {
  path: string;
  exists: boolean;
  content: string | null;
};

type ComponentContext = {
  component: string;
  normalizedName: string;
  type: 'ui' | 'chunk' | 'unknown';
  files: {
    implementation: FileInfo;
    story: FileInfo;
    documentation: FileInfo;
  };
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const stylesDir = path.join(repoRoot, 'src', 'styles');
const globalsPath = path.join(stylesDir, 'globals.css');
const variablesPath = path.join(stylesDir, 'variables.css');

const toKebabCase = (value: string) => {
  const cleaned = value
    .trim()
    .replace(/\.(tsx|ts|mdx)$/i, '')
    .replace(/^[./]+/, '')
    .replace(/[/\\]+/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
  return cleaned.length === 0 ? value : cleaned;
};

const readFileInfo = async (absolutePath: string): Promise<FileInfo> => {
  const relativePath = path.relative(repoRoot, absolutePath);
  try {
    const content = await readFile(absolutePath, 'utf8');
    return { path: relativePath, exists: true, content };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { path: relativePath, exists: false, content: null };
    }
    throw error;
  }
};

const parseCssVariables = (cssText: string) => {
  const regex = /--([A-Za-z0-9-_]+)\s*:\s*([^;]+);/g;
  const tokens: { name: string; value: string; category: string }[] = [];
  const seen = new Set<string>();
  let match: RegExpExecArray | null = null;

  while ((match = regex.exec(cssText)) !== null) {
    const name = match[1]?.trim();
    const value = match[2]?.trim();
    if (!name || !value) continue;
    const tokenName = `--${name}`;
    if (seen.has(tokenName)) continue;
    seen.add(tokenName);

    const category = name.split('-')[0] ?? 'other';
    tokens.push({ name: tokenName, value, category });
  }

  return tokens;
};

const buildComponentContext = async (componentName: string): Promise<ComponentContext> => {
  const normalizedName = toKebabCase(componentName);
  const uiDir = path.join(repoRoot, 'src', 'components', 'ui');
  const chunkDir = path.join(repoRoot, 'src', 'components', normalizedName);

  const uiFiles = {
    implementation: await readFileInfo(path.join(uiDir, `${normalizedName}.tsx`)),
    story: await readFileInfo(path.join(uiDir, `${normalizedName}.stories.tsx`)),
    documentation: await readFileInfo(path.join(uiDir, `${normalizedName}.mdx`))
  };

  const chunkFiles = {
    implementation: await readFileInfo(path.join(chunkDir, 'index.tsx')),
    story: await readFileInfo(path.join(chunkDir, 'stories.tsx')),
    documentation: await readFileInfo(path.join(chunkDir, 'documentation.mdx'))
  };

  const uiFound = Object.values(uiFiles).some(file => file.exists);
  const chunkFound = Object.values(chunkFiles).some(file => file.exists);

  if (uiFound) {
    return {
      component: componentName,
      normalizedName,
      type: 'ui',
      files: uiFiles
    };
  }

  if (chunkFound) {
    return {
      component: componentName,
      normalizedName,
      type: 'chunk',
      files: chunkFiles
    };
  }

  return {
    component: componentName,
    normalizedName,
    type: 'unknown',
    files: uiFiles
  };
};

const server = new McpServer({
  name: 'fabrica-design-system-mcp',
  version: '0.1.0'
});

server.registerResource(
  'design-tokens',
  'design-tokens://tokens',
  {
    title: 'Design Tokens',
    description: 'Design tokens parsed from src/styles/globals.css and variables.css',
    mimeType: 'application/json'
  },
  async () => {
    const readText = async (filePath: string) => {
      try {
        const text = await readFile(filePath, 'utf8');
        return { text, error: null as string | null };
      } catch (error) {
        return {
          text: '',
          error: `Failed to read ${path.relative(repoRoot, filePath)}`
        };
      }
    };

    const globals = await readText(globalsPath);
    const variables = await readText(variablesPath);

    const tokens = [
      ...parseCssVariables(globals.text),
      ...parseCssVariables(variables.text)
    ];

    const errors = [globals.error, variables.error].filter(Boolean);
    const payload = {
      sources: ['src/styles/globals.css', 'src/styles/variables.css'],
      count: tokens.length,
      tokens,
      ...(errors.length > 0 ? { errors } : {})
    };

    return {
      contents: [
        {
          uri: 'design-tokens://tokens',
          mimeType: 'application/json',
          text: JSON.stringify(payload, null, 2)
        }
      ]
    };
  }
);

server.registerTool(
  'get_component_context',
  {
    title: 'Get Component Context',
    description: 'Fetch implementation, story, and docs for a component.',
    inputSchema: z.object({
      name: z.string().describe('Component name, e.g. button or date-picker')
    })
  },
  async ({ name }) => {
    const context = await buildComponentContext(name);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(context, null, 2)
        }
      ],
      structuredContent: context
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Fabrica MCP server is running...');
}

try {
  await main();
} catch (error) {
  console.error('MCP server error:', error);
  process.exit(1);
}
