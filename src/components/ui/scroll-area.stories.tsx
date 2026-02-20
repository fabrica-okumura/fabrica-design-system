import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ScrollArea } from "./scroll-area"

type ScrollAreaProps = React.ComponentProps<typeof ScrollArea>

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ScrollAreaProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-[320px] rounded-md border p-3">
      <div className="space-y-3">
        {Array.from({ length: 20 }).map((_, index) => (
          <p key={index} className="text-sm">
            スクロール項目 {index + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
}
