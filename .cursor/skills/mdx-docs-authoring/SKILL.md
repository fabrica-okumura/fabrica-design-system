---
name: mdx-docs-authoring
description: AリポのdocsサイトMDX作成とスタイリングを案内する。MDXページ追加、タイポ調整、proseとmdx-componentsの使い分け判断時に使う。
---

# MDX docs作成

## トリガー
- `content/**` 配下の新規docsページ追加。
- MDXのタイポグラフィ・スタイル調整。
- `prose` と `mdx-components.tsx` の使い分け相談。

## 手順
1. ルートは `src/app/**/page.tsx`、本文は `content/**` に置く。
2. `src/components/ui/*.mdx` は Storybook 専用として扱う（Doc Blocks/Canvas/Controls 用）。
3. `/components` は一覧・導線ページとし、コンポーネント詳細は Storybook を正本とする。
4. 記事ラッパーのクラス直書きは避け、`src/components/docs-site/*` のラッパーを使う。
5. 見た目調整は `prose` を基本とし、A専用上書きは `src/app/globals.css` に置く。
6. 構造置換が必要な場合のみ `mdx-components.tsx` を導入する（例: `h2` を独自コンポーネントに置換）。

## ガードレール
- docs専用スタイルを `src/styles/**` に入れない。
- 可読性を優先し、小さく明示的な上書きに留める。
- コンポーネント詳細のWeb用MDXページを新規作成しない（詳細は Storybook に集約）。
