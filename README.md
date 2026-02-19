# Fabrica Design System

Fabricaの共通UIコンポーネントとデザイントークンを提供するリポジトリです。デザインシステムのWebサイト（[https://fabrica-design-system.vercel.app/](https://fabrica-design-system.vercel.app/)）も公開しています。

## 用語（前提）

本ドキュメントでは **Aリポ＝fabrica-design-system**（本リポ）、**Bリポ＝fabrica-product-starter**（スターター）とします。以下、Aリポ・Bリポで表記します。

## 2リポジトリ構成と作業の前提

- **Aリポ:** 本体 + docs。UIコンポーネント/トークンとデザインシステムサイトを同居運用します。
- **Bリポ:** 新規プロダクト用テンプレート。Aリポの実体を同期で取り込みます。
- **作業の前提:** Aリポと Bリポは **同階層にクローン（ダウンロード）して作業する** ことを想定しています。例: 親フォルダの下に `fabrica-design-system` と `fabrica-product-starter` を並べ、同期や MCP の相対パス（`../fabrica-design-system`）がそのまま使えるようにします。

## 技術スタック

- **Framework:** Next.js v16 (App Router)
- **UI Library:** shadcn/ui v3
- **Styling:** Tailwind CSS v4（CSS変数と `@theme`、`tailwind.config.ts` は廃止方針）
- **Catalog:** Storybook（Aリポが主、Bリポは必要に応じて利用）
- **Documentation:** MDX（コンポーネント仕様・ガイドライン）
- **AI:** MCP (Model Context Protocol)、Agent Skills（`SKILL.md` 形式）
- **Design Tool:** Figma (Dev Mode & Variables)
- **Runtime:** Node.js v22 以上

## 利用対象
- **デザインシステム担当**: Aリポを更新し、Aリポ→Bリポ同期で Bリポに配布します。
- **通常の開発者**: Bリポを利用し、基本的に Aリポは触りません。

## 必要バージョン
- Node.js v22 以上
- npm（pnpm / Yarn は使用しません）

## まずは何をすればいい？
Aリポは **デザインシステム担当のみ** が更新・修正します。  
通常の開発者は **Bリポ** から作業を開始してください。

## 初期セットアップ
```bash
npm install
npm run dev
```

## よく使うスクリプト
- `npm run dev`: Next.js 開発サーバーを起動
- `npm run storybook`: Storybook を起動
- `npm run watch:icons`: `public/icons/*.svg` の変更を監視して `icon-definitions.ts` を再生成
- `npm run generate:icons`: アイコン定義の手動再生成

## リポジトリ構成（Aリポ）

```
.
├── .cursor/skills/        # Agent Skills（Cursor用・正本）
├── .storybook/
├── mcp-server/           # MCPサーバー（tools / resources）
├── src/
│   ├── components/ui/       # Primitives（再利用資産・Bへ同期）
│   ├── components/[name]/   # Chunks（複合コンポ・将来用）
│   ├── components/layout/   # レイアウトコンポ（再利用資産・Bへ同期）
│   ├── components/docs-site/ # docsサイト専用UI（Aのみ・同期しない）
│   ├── lib/              # ユーティリティ（再利用資産）
│   ├── styles/           # CSS正本（再利用資産）
│   ├── tokens/           # トークン（再利用資産）
│   └── app/              # docsサイト専用（App Router）
├── content/              # docs用MDX記事
├── public/               # docs用（画像/OGP/アイコン）
├── tokens/               # デザイントークンソース（ビルド入力）
└── scripts/
```

## ディレクトリ責務（本体とdocsの分離）

- **再利用資産（プロダクト側でも使う）**
  - `src/components/ui`（Primitives）
  - `src/components/layout`（レイアウトコンポ）
  - `src/styles`（CSS正本）
  - `src/tokens`（トークン）
  - `src/lib`（ユーティリティ）
- **docsサイト専用**
  - `src/app/**`（Next App Router のページ）
  - `src/components/docs-site/**`（docsサイト専用UI。Aリポのみ。Bへは同期しない）
  - docs専用のCSS（レイアウト・サイドバー・MDX表示・コードブロック用など。`src/app/` や `src/components/docs-site/` 内に配置。正本の `src/styles` は共有用なので配置しません）
  - `content/**`（各ページのMDX記事）
  - `public/**`（サイト画像/OGP/アイコンなど）
- **MDX:** コンポーネント仕様（`src/components/ui/*.mdx`）および docs 記事（`content/**`）は、必要な場合のみ配置します。
- Bリポへの同期対象は **再利用資産のみ** です。`src/components` 配下では **ui・layout・Chunks（[name]）** を同期し、**docs-site** のみ同期しません。
- **同期対象のファイル・ディレクトリ構成は Aリポ と Bリポ で揃えておく必要があります。** 正本は Aリポ にあり、Bリポ は同期で上書きするため、同期対象ファイルは Bリポ 側で直接編集せず、Aリポ を更新してから `npm run sync:ds` で反映します。

### docs 用 MDX スタイル方針（Aリポ専用）

- **見た目の調整（タイポグラフィ、余白、色など）** は `prose` を使い、`src/app/globals.css` で上書きします。
- **要素の意味や構造を変える調整（例: `h2` を独自 `Heading` に置換）** が必要になった場合のみ `mdx-components.tsx` を導入します。
- Aリポ専用の MDX スタイル設定は `src/app/**` または `src/components/docs-site/**` に置きます。`src/styles/**` には置きません（Bリポ同期対象のため）。

## docsサイト・Storybook

- **Storybook:** UIの実装検証・インタラクション確認が主です。Aリポが主、Bリポは B専用コンポの Docs 表示で必要に応じて利用します。
- **docs:** 使い方・原則・ガイドラインの体系化です。トップ（`/`）、Getting Started（`/getting-started`）、Foundations（`/foundations`）、Components（`/components/[slug]`）を想定しています。

## 配布方針

- **配布方式:** Aリポ→Bリポ同期で配布します。
- **CSSの正本:** Aリポの `src/styles/globals.css` です。docs は Aリポ内で参照し、Bリポは `src/styles/**` を同期して利用します。

## ルールの責務分離（人向け / AI向け）

- **人が守ること（README）:** 目的、責務、同期対象、作業フローなどの運用ルールは README に記載します。
- **AIが守ること（Skills）:** 編集判断、手順、禁止事項、確認手順は `.cursor/skills/**/SKILL.md` に記載します。
- 同じ内容を二重管理しないため、README は「方針」、Skills は「実行ルール」に限定します。

## Agent Skills（AI向け運用ルール）

- **Cursor:** `.cursor/skills/` を正本とします。
- **Claude Desktop:** `.cursor/skills/` の内容を `.claude/skills/` にシンボリックリンクまたはコピーで対応します。
- 主な Skill:
  - `skill-authoring-governance`: Skill作成時にREADME（人向け）とSkills（AI向け）の責務を分離するための基準。
  - `boundary-rules`: 再利用資産とA専用docs資産の配置境界・同期境界を判断するルール。
  - `mdx-docs-authoring`: AリポのMDXページ作成と `prose` / `mdx-components` の使い分けルール。
  - `release-sync-playbook`: Aリポ更新をBリポ同期へ受け渡す際の確認手順とチェックリスト。

## MCP（Model Context Protocol）

このリポジトリには **Fabrica デザインシステム用の MCP サーバー** が含まれています。  
Cursor などの MCP 対応ツールから接続すると、AI がコンポーネントの実装・ストーリー・ドキュメントやデザイントークンを参照しやすくなり、開発や質問への回答がスムーズになります。

### 提供している機能

| 種類 | 名前 | 説明 |
|------|------|------|
| ツール | `get_component_context` | コンポーネント名（例: `button`, `switch`）を渡すと、実装・ストーリー・MDX のパスと内容を返します。 |
| リソース | `design-tokens` | `src/styles/globals.css` と `variables.css` からパースしたデザイントークン（JSON）を参照できます。 |

### 誰がどこで使うと便利？

- **デザインシステム担当（Aリポで作業する人）**: 接続しておくと、コンポーネント更新時に AI が一括で実装・ストーリー・ドキュメントを参照しやすくなります。
- **通常の開発者（Bリポなど別リポで作業する人）**: Aリポのソースが手元にないため、MCP で接続しておくと「Button の variant 一覧」「トークンの値」などを AI が参照でき、正しい使い方を聞きやすくなります。

---

### 設定方法

#### 1. MCP サーバーのビルド（初回と、mcp-server を変更したときだけ）

MCP サーバーは TypeScript で書かれているため、**リポジトリを clone したあと**や**初めて MCP を有効にしたとき**、および**`mcp-server/` 内のコードを変更したあと**にビルドが必要です。通常の作業開始のたびにビルドする必要はありません。

```bash
cd mcp-server
npm install
npm run build
```

#### 2. Aリポを Cursor で開いている場合

Aリポにはすでに `.cursor/mcp.json` が含まれており、**Aリポをルートにして Cursor で開いていれば**、MCP は自動で利用可能です。

- 初回は上記のビルドを実行してください。
- Cursor を開き直すか、MCP の再接続が行われれば「fabrica-design-system」サーバーが一覧に表示されます。
- 表示されない・エラーになる場合は、Cursor の MCP ログ（出力パネルなど）で「Missing script: mcp」が出ていないか確認し、Aリポのルートで `npm run mcp` が実行できる状態か確認してください。

#### 3. 利用側アプリ（別リポジトリ）で使う場合

Aリポのソースが含まれていない **Bリポなど別のプロジェクト** で、同じ MCP を使いたい場合の例です。

1. そのプロジェクトのルートに `.cursor/mcp.json` を作成（既にある場合は `mcpServers` に追記）します。
2. デザインシステムのリポジトリへの **相対パス** または **絶対パス** で、MCP を起動するように書きます。

**例：デザインシステムが `../fabrica-design-system` にある場合**

```json
{
  "mcpServers": {
    "fabrica-design-system": {
      "command": "npm",
      "args": ["run", "mcp", "--prefix", "../fabrica-design-system"]
    }
  }
}
```

**例：絶対パスで指定する場合**

```json
{
  "mcpServers": {
    "fabrica-design-system": {
      "command": "npm",
      "args": ["run", "mcp", "--prefix", "/Users/あなたのユーザー名/path/to/fabrica-design-system"]
    }
  }
}
```

- 利用側プロジェクト側でも、デザインシステムの `mcp-server` は事前にビルド済み（`mcp-server/dist/index.js` が存在する）必要があります。
- 設定後は Cursor を再起動するか、MCP の再接続を試してください。

---

### 使い方（Cursor でのイメージ）

- **チャットで「Button の variant を教えて」などと聞く**  
  → AI が MCP の `get_component_context` や `design-tokens` を参照し、実装やトークンに基づいて回答できます。
- **「Switch をこの画面に追加して」と依頼する**  
  → 利用側アプリで MCP に接続していれば、AI が Switch の実装・props を参照してコードを提案しやすくなります。

設定が分からない場合は、デザインシステム担当に依頼してください。通常の開発者は、**デザインシステム Web サイト**（`https://fabrica-design-system.vercel.app/`）の参照だけでも問題ありません。

### MCP運用ルール

1. **正本は本体リポジトリ:** MCPの実装・定義は `mcp-server/` のみで管理します。
2. **同期タイミング:** トークン/CSS更新後は `design-tokens` リソースを再生成し、同一コミットに含めます。
3. **破壊的変更:** Tool/Resource の入出力スキーマ変更時はセマンティックバージョンを更新し、変更理由を記録します。
4. **外部参照の安定性:** `get_component_context` の返却は実装・ストーリー・MDX の3点セットを欠かしません。
5. **環境依存の排除:** MCPは Bリポに依存せず、Aリポのみで完結します。

## アイコン運用
- アイコンSVGファイルは `public/icons/` に配置してください。
- 開発中は `npm run watch:icons` を常駐させることで、SVG追加・更新時に `src/components/ui/icon-definitions.ts` が自動更新されます。

## CSS / デザイントークン運用

### フォント設定
デフォルトフォントとして **Noto Sans JP** を使用しています。`next/font/google` を使用して最適化されており、`src/styles/globals.css` でフォールバックフォントとして「Hiragino Sans」「Hiragino Kaku Gothic ProN」「Helvetica Neue」を設定しています。

### デザイントークン運用
- Figmaからエクスポートしたデザイントークンを `tokens/` ディレクトリに配置します。
- トークン配置後は `node scripts/remove-japanese-tokens.mjs` を実行して余分な日本語ラベルを削除します。
- CSSビルドのため `npx style-dictionary build` を実行します（出力先: `src/styles/variables.css`）。
- 最後に `node scripts/postprocess-design-tokens.mjs` を実行し、`variables.css` のrem値を1/10に調整しつつ、`--master-` などのカスタムプレフィックスを通常の `--` に統一します。
