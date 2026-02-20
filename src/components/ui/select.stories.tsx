import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select"

type SelectProps = React.ComponentProps<typeof Select>

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select defaultValue="tokyo">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="都道府県を選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>エリア</SelectLabel>
          <SelectItem value="osaka">大阪</SelectItem>
          <SelectItem value="tokyo">東京</SelectItem>
          <SelectItem value="fukuoka">福岡</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <Select defaultValue="banana">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="カテゴリを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>果物</SelectLabel>
          <SelectItem value="apple">りんご</SelectItem>
          <SelectItem value="banana">バナナ</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>野菜</SelectLabel>
          <SelectItem value="carrot">にんじん</SelectItem>
          <SelectItem value="tomato">トマト</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
