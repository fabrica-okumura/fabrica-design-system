import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "./input"

type InputProps = React.ComponentProps<typeof Input>

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "メールアドレスを入力",
    className: "w-[320px]",
    type: "text",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "disabled@example.com",
  },
}
