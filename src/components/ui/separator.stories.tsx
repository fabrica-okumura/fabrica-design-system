import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Separator } from "./separator"

type SeparatorProps = React.ComponentProps<typeof Separator>

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<SeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[320px]">
      <div>上部コンテンツ</div>
      <Separator {...args} className="my-3" />
      <div>下部コンテンツ</div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-20 items-center">
      <span>左</span>
      <Separator {...args} className="mx-4" />
      <span>右</span>
    </div>
  ),
}
