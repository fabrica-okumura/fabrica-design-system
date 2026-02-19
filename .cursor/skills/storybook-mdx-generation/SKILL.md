---
name: storybook-mdx-generation
description: ReactコンポーネントからStorybook用のCSFストーリーファイルとMDXドキュメントを生成する。ユーザーが「ストーリー作成」「MDX作成」「Storybook docsテンプレ」を求めるときに使う。Auto Docsは使わず、日本語でMDXを生成する。
---

# Storybook MDX Generation

## 目的
コンポーネントファイルから、Storybookのストーリーファイル（CSF）とMDXドキュメントを同じディレクトリに作成する。

## 必須ルール
- **Auto Docsは使わない**（`tags: ["autodocs"]` を付けない）。
- **MDXは日本語**で記述する。
- MDXのDoc Blocksは **`@storybook/addon-docs/blocks`** を使う（`@storybook/blocks`は使わない）。
- MDXのコメントは **`{/* */}`** 形式のみ。
- MDXファイル名は **`<component>.mdx`**（`.docs`は付けない）。
- **1 Canvas = 1 Story**（複数Storyを1つのCanvasにまとめない）。
- **ControlsはPrimaryのみ**表示する。
- テスト用の依存（vitest/playwright/chromatic）は追加しない。
- このSkillで扱うMDXは **`src/components/ui/*.mdx`（Storybook専用）** のみ。
- **`content/components/*.mdx`（Webページ用）** は別責務のため、ここでは新規作成・更新しない。

## 生成手順
1. 対象のコンポーネントファイルを確認し、**コンポーネント名**と**配置ディレクトリ**を特定する。
2. 同じディレクトリに `<component>.stories.tsx` を作成（既存があれば追記/更新）。
3. 同じディレクトリに `<component>.mdx` を作成（テンプレートは `assets/storybook-component-template.mdx` を使用）。
4. `Meta` の `title` はディレクトリ構成に合わせて整える（例: `UI/Button`）。

## ストーリーファイル（CSF）方針
- import は `@storybook/nextjs-vite` を使う。
- `meta` は `component` と `title` を必須とし、`parameters.layout` を必要に応じて設定する。
- `variant`/`size` など選択肢がある場合は `argTypes` に `control` と `options` を定義する。
- `Primary` を基準ストーリーにする（Controlsで操作対象になる）。
- `storybook/test` の利用や `play` は追加しない（テスト目的の挙動は書かない）。

### 最小テンプレート（例）
```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Component } from "./component";

type ComponentProps = React.ComponentProps<typeof Component>;

const meta = {
  title: "UI/Component",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ComponentProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
```

## MDXテンプレート
`assets/storybook-component-template.mdx` をコピーして使用する。  
ストーリー名や見出しだけ差し替える。

## よくある注意点
- Docs専用MDXとAuto Docsを同時に使うと重複エラーになるため、必ずAuto Docsを外す。
- MDX内で `Canvas` に複数 `Story` を詰めると1つしか表示されないことがあるため、必ず1つずつ分ける。
