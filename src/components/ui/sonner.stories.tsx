import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"

import { Button } from "./button"
import { Toaster } from "./sonner"

type ToasterProps = React.ComponentProps<typeof Toaster>

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ToasterProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast.success("保存しました")}>Show Toast</Button>
      <Toaster />
    </div>
  ),
}
