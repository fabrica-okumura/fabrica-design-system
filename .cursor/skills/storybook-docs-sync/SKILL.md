---
name: storybook-docs-sync
description: コンポーネント本体の更新に合わせてStorybookのストーリーとMDXを更新する。ユーザーが「コンポーネント更新」「ストーリー更新」「MDX更新」「同期」などを求めるときに使う。Auto Docsは使わず、日本語のMDXを維持する。
---

# Storybook Docs Sync

## 目的
コンポーネント本体の変更内容を反映して、同じディレクトリのストーリーファイル（CSF）とMDXドキュメントを更新する。

## 必須ルール
- **Auto Docsは使わない**（`tags: ["autodocs"]` を付けない）。
- **MDXは日本語**で記述する。
- MDXのDoc Blocksは **`@storybook/addon-docs/blocks`** を使う。
- MDXのコメントは **`{/* */}`** 形式のみ。
- MDXファイル名は **`<component>.mdx`**（`.docs`は付けない）。
- **1 Canvas = 1 Story**（複数Storyを1つのCanvasにまとめない）。
- **ControlsはPrimaryのみ**表示する。
- テスト用の依存（vitest/playwright/chromatic）は追加しない。

## 更新手順
1. 変更対象のコンポーネントファイルと既存の `<component>.stories.tsx` / `<component>.mdx` を読み取る。
2. 追加・削除・変更された props / variants / states を洗い出す。
3. ストーリーを更新する：
   - `Primary` を基準として維持
   - 追加された状態は新しいStoryとして追記
   - 廃止された状態はStoryから削除
   - `argTypes` の選択肢を最新のpropsに合わせる
4. MDXを更新する：
   - `Examples` の見出しと `<Canvas>` をStory一覧に合わせて並べる
   - `Controls` は `Primary` の直下のみ
5. 破綻しやすい点（Story名の参照ミス、MDXのimport先）を最終確認する。

## ストーリー更新チェックリスト
- `title` がディレクトリ構成と一致している
- `component` が最新の実体を参照している
- `argTypes` が最新のpropsに合っている
- `Primary` の `args` が最小で意味のあるデフォルト
- `storybook/test` や `play` が追加されていない

## MDX更新テンプレート
必要に応じて `../storybook-mdx-generation/assets/storybook-component-template.mdx` を参照する。
