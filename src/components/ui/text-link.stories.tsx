import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TextLink } from "./text-link"

type TextLinkProps = React.ComponentProps<typeof TextLink>

const meta = {
  title: "UI/TextLink",
  component: TextLink,
  parameters: {
    layout: "centered",
  },
  args: {
    href: "#",
    children: "詳細を見る",
  },
  argTypes: {
    border: {
      control: "select",
      options: ["none", "underline"],
    },
    icon: {
      control: "select",
      options: ["arrow-right", "search", "download", "settings"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
} satisfies Meta<TextLinkProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const UnderlineWithIcon: Story = {
  args: {
    border: "underline",
    icon: "arrow-right",
    iconPosition: "right",
  },
}
