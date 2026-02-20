import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Icon } from "./icon"
import { Toggle } from "./toggle"

type ToggleProps = React.ComponentProps<typeof Toggle>

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<ToggleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Bold",
  },
}

export const WithIcon: Story = {
  args: {
    variant: "outline",
    children: <Icon name="search" size={16} />,
    "aria-label": "Search",
  },
}
