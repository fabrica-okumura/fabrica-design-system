import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "./checkbox"
import { Label } from "./label"

type CheckboxProps = React.ComponentProps<typeof Checkbox>

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
  },
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" {...args} />
      <Label htmlFor="agree">利用規約に同意する</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="subscribe" {...args} />
      <Label htmlFor="subscribe">ニュースレターを受け取る</Label>
    </div>
  ),
}
