import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "./input"
import { Label } from "./label"

type LabelProps = React.ComponentProps<typeof Label>

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<LabelProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="email">メールアドレス</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  ),
}

export const DisabledField: Story = {
  render: () => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="disabled-email">メールアドレス</Label>
      <Input id="disabled-email" type="email" disabled value="disabled@example.com" />
    </div>
  ),
}
