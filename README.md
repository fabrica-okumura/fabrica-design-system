# Fabrica Design System

Fabricaの共通UIコンポーネントとデザイントークンを提供するリポジトリです。

## 利用対象
- **デザインシステム担当**: 本リポジトリを更新・配布します。
- **通常の開発者**: `fabrica-product-starter` を利用し、基本的に本リポジトリは触りません。

## 必要バージョン
- Node.js v22 以上
- npm（pnpm / Yarn は使用しません）

## 初期セットアップ
```bash
npm install
npm run dev
```

## よく使うスクリプト
- `npm run dev`: Next.js 開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run lint`: Lint チェック
- `npm run storybook`: Storybook を起動（ポート 6006）
- `npm run watch:icons`: `public/icons/*.svg` の変更を監視して `icon-definitions.ts` を再生成
- `npm run generate:icons`: アイコン定義の手動再生成

## 公開と利用（npmjs）
本体は `npm publish` で公開し、スターター側は `@fabrica_communications/design-system` をインストールします。

## MCPサーバー（ローカル）
MCPサーバーは `mcp-server/` にあります。ローカルでの起動は以下の通りです。

```bash
cd mcp-server
npm install
npm run build
npm run mcp
```

## アイコン運用
- 新しいSVGアイコンは `public/icons/` に配置してください。
- 開発中は `npm run watch:icons` を常駐させることで、SVG追加・更新時に `src/components/ui/icon-definitions.ts` が自動更新されます。
- 自動生成を忘れてコミットしないよう、PR作成前に差分がないか確認してください。

## CSS / デザイントークン運用

### フォント設定
デフォルトフォントとして **Noto Sans JP** を使用しています。`next/font/google` を使用して最適化されており、`src/styles/globals.css` でフォールバックフォントとして「Hiragino Sans」「Hiragino Kaku Gothic ProN」「Helvetica Neue」を設定しています。

### デザイントークン運用
- Figmaからエクスポートしたデザイントークンを `tokens/` ディレクトリに配置します。
- トークン配置後は `node scripts/remove-japanese-tokens.mjs` を実行して余分な日本語ラベルを削除します。
- CSSビルドのため `npx style-dictionary build` を実行します（出力先: `src/styles/variables.css`）。
- 最後に `node scripts/postprocess-design-tokens.mjs` を実行し、`variables.css` のrem値を1/10に調整しつつ、`--master-` などのカスタムプレフィックスを通常の `--` に統一します。
