import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

type TooltipProps = React.ComponentProps<typeof Tooltip>

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="neutral">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>補足情報を表示します</TooltipContent>
    </Tooltip>
  ),
}
