import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Textarea } from "./textarea"

type TextareaProps = React.ComponentProps<typeof Textarea>

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "お問い合わせ内容を入力してください",
    className: "w-[360px]",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<TextareaProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: "初期表示のテキストです。",
  },
}
