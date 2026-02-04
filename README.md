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

## MCPサーバー（ローカル）
MCPサーバーは `mcp-server/` にあります。ローカルでの起動は以下の通りです。

```bash
cd mcp-server
npm install
npm run build
npm run mcp
```

### 開発者がMCPを使いたい場合
通常の開発者は **デザインシステムWebサイト**（`https://fabrica-design-system.vercel.app/`）の参照だけで十分です。  
MCPを使いたい場合は、以下のどちらかを行います。

1. **ローカルでMCPサーバーを起動して利用する**  
   - 上の「MCPサーバー（ローカル）」の手順で起動  
   - MCP対応クライアント（Cursor / Claude Desktop など）で  
     **ローカルコマンド（`npm run mcp`）を実行する設定**を追加します

2. **デザインシステム担当に依頼する**  
   - MCPの接続設定が分からない場合は担当者に依頼してください

## アイコン運用
- 新しいSVGアイコンは `public/icons/` に配置してください。
- 開発中は `npm run watch:icons` を常駐させることで、SVG追加・更新時に `src/components/ui/icon-definitions.ts` が自動更新されます。

## CSS / デザイントークン運用

### フォント設定
デフォルトフォントとして **Noto Sans JP** を使用しています。`next/font/google` を使用して最適化されており、`src/styles/globals.css` でフォールバックフォントとして「Hiragino Sans」「Hiragino Kaku Gothic ProN」「Helvetica Neue」を設定しています。

### デザイントークン運用
- Figmaからエクスポートしたデザイントークンを `tokens/` ディレクトリに配置します。
- トークン配置後は `node scripts/remove-japanese-tokens.mjs` を実行して余分な日本語ラベルを削除します。
- CSSビルドのため `npx style-dictionary build` を実行します（出力先: `src/styles/variables.css`）。
- 最後に `node scripts/postprocess-design-tokens.mjs` を実行し、`variables.css` のrem値を1/10に調整しつつ、`--master-` などのカスタムプレフィックスを通常の `--` に統一します。
