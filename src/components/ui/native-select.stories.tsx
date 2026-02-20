import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "./native-select"

type NativeSelectProps = React.ComponentProps<typeof NativeSelect>

const meta = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "w-[320px]",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<NativeSelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="tokyo">
      <NativeSelectOption value="osaka">大阪</NativeSelectOption>
      <NativeSelectOption value="tokyo">東京</NativeSelectOption>
      <NativeSelectOption value="fukuoka">福岡</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithOptGroup: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="apple">
      <NativeSelectOptGroup label="果物">
        <NativeSelectOption value="apple">りんご</NativeSelectOption>
        <NativeSelectOption value="orange">オレンジ</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="野菜">
        <NativeSelectOption value="carrot">にんじん</NativeSelectOption>
        <NativeSelectOption value="tomato">トマト</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}
