import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { AspectRatio } from "./aspect-ratio"

type AspectRatioProps = React.ComponentProps<typeof AspectRatio>

const meta = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  args: {
    ratio: 16 / 9,
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.5, max: 3, step: 0.1 },
    },
  },
} satisfies Meta<AspectRatioProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <AspectRatio {...args} className="overflow-hidden rounded-md bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          16:9 Placeholder
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args} className="overflow-hidden rounded-md bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          1:1 Placeholder
        </div>
      </AspectRatio>
    </div>
  ),
}
