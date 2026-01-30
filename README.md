# Fabrica Design System

Fabricaの共通UIコンポーネントとデザイントークンを提供するリポジトリです。

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
