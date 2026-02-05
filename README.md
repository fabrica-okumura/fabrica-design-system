# Fabrica Design System

Fabricaの共通UIコンポーネントとデザイントークンを提供するリポジトリです。

## 利用対象
- **デザインシステム担当**: 本リポジトリを更新し、A→B 同期でスターターに配布します（npm 公開は行いません）。
- **通常の開発者**: `fabrica-product-starter` を利用し、基本的に本リポジトリは触りません。

## 必要バージョン
- Node.js v22 以上
- npm（pnpm / Yarn は使用しません）

## まずは何をすればいい？
このリポジトリは **デザインシステム担当のみ** が更新・修正します。  
通常の開発者は **スターターリポジトリ** から作業を開始してください。

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

## MCP（Model Context Protocol）

このリポジトリには **Fabrica デザインシステム用の MCP サーバー** が含まれています。  
Cursor などの MCP 対応ツールから接続すると、AI がコンポーネントの実装・ストーリー・ドキュメントやデザイントークンを参照しやすくなり、開発や質問への回答がスムーズになります。

### 提供している機能

| 種類 | 名前 | 説明 |
|------|------|------|
| ツール | `get_component_context` | コンポーネント名（例: `button`, `switch`）を渡すと、実装・ストーリー・MDX のパスと内容を返します。 |
| リソース | `design-tokens` | `src/styles/globals.css` と `variables.css` からパースしたデザイントークン（JSON）を参照できます。 |

### 誰がどこで使うと便利？

- **デザインシステム担当（本リポジトリで作業する人）**: 接続しておくと、コンポーネント更新時に AI が一括で実装・ストーリー・ドキュメントを参照しやすくなります。
- **通常の開発者（スターターなど別リポジトリで作業する人）**: 本リポジトリのソースが手元にないため、MCP で接続しておくと「Button の variant 一覧」「トークンの値」などを AI が参照でき、正しい使い方を聞きやすくなります。

---

### 設定方法

#### 1. MCP サーバーのビルド（初回と、mcp-server を変更したときだけ）

MCP サーバーは TypeScript で書かれているため、**リポジトリを clone したあと**や**初めて MCP を有効にしたとき**、および**`mcp-server/` 内のコードを変更したあと**にビルドが必要です。通常の作業開始のたびにビルドする必要はありません。

```bash
cd mcp-server
npm install
npm run build
```

#### 2. 本リポジトリ（デザインシステム）を Cursor で開いている場合

このリポジトリにはすでに `.cursor/mcp.json` が含まれており、**このリポジトリをルートにして Cursor で開いていれば**、MCP は自動で利用可能です。

- 初回は上記のビルドを実行してください。
- Cursor を開き直すか、MCP の再接続が行われれば「fabrica-design-system」サーバーが一覧に表示されます。
- 表示されない・エラーになる場合は、Cursor の MCP ログ（出力パネルなど）で「Missing script: mcp」が出ていないか確認し、本リポジトリのルートで `npm run mcp` が実行できる状態か確認してください。

#### 3. 利用側アプリ（別リポジトリ）で使う場合

デザインシステムのソースが含まれていない **別のプロジェクト（スターターなど）** で、同じ MCP を使いたい場合の例です。

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
