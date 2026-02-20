import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Text } from "./text"

type TextProps = React.ComponentProps<typeof Text>

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "これは本文テキストのサンプルです。",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
    },
    lineHeight: {
      control: "select",
      options: ["tight", "normal", "relaxed", "loose"],
    },
  },
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: "base",
    lineHeight: "normal",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    lineHeight: "relaxed",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    lineHeight: "tight",
  },
}
