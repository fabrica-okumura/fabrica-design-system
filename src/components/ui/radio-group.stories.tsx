import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

type RadioGroupProps = React.ComponentProps<typeof RadioGroup>

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<RadioGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="w-[320px]">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="pay-card" value="card" />
        <Label htmlFor="pay-card">クレジットカード</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="pay-bank" value="bank" />
        <Label htmlFor="pay-bank">銀行振込</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="pay-wallet" value="wallet" />
        <Label htmlFor="pay-wallet">ウォレット決済</Label>
      </div>
    </RadioGroup>
  ),
}
