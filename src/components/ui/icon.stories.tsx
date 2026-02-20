import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Icon } from "./icon"

type IconProps = React.ComponentProps<typeof Icon>

const meta = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "search",
    size: 24,
  },
  argTypes: {
    name: {
      control: "select",
      options: ["search", "settings", "arrow-right", "arrow-up", "checkmark"],
    },
    size: {
      control: { type: "number", min: 12, max: 64, step: 2 },
    },
    alt: {
      control: "text",
    },
    title: {
      control: "text",
    },
  },
} satisfies Meta<IconProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAlt: Story = {
  args: {
    name: "settings",
    alt: "設定",
  },
}
