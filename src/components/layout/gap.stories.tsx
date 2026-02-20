import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Gap } from "./gap"

type GapProps = React.ComponentProps<typeof Gap>

const meta = {
  title: "Layout/Gap",
  component: Gap,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
    row: {
      control: "boolean",
    },
    wrap: {
      control: "boolean",
    },
  },
} satisfies Meta<GapProps>

export default meta
type Story = StoryObj<typeof meta>

export const Column: Story = {
  args: {
    gap: "md",
    row: false,
  },
  render: (args) => (
    <Gap {...args} className="w-[320px] rounded-md border p-4">
      <div className="rounded bg-muted p-2">Item 1</div>
      <div className="rounded bg-muted p-2">Item 2</div>
      <div className="rounded bg-muted p-2">Item 3</div>
    </Gap>
  ),
}

export const RowWrap: Story = {
  args: {
    gap: "lg",
    row: true,
    wrap: true,
  },
  render: (args) => (
    <Gap {...args} className="w-[360px] rounded-md border p-4">
      <div className="rounded bg-muted p-2">Tag 1</div>
      <div className="rounded bg-muted p-2">Tag 2</div>
      <div className="rounded bg-muted p-2">Tag 3</div>
      <div className="rounded bg-muted p-2">Tag 4</div>
      <div className="rounded bg-muted p-2">Tag 5</div>
    </Gap>
  ),
}
