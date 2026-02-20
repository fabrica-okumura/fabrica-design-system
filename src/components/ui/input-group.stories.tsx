import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group"

type InputGroupProps = React.ComponentProps<typeof InputGroup>

const meta = {
  title: "UI/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<InputGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const WithAddon: Story = {
  render: () => (
    <InputGroup className="w-[360px]">
      <InputGroupAddon>
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-[360px]">
      <InputGroupInput placeholder="キーワードを入力" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>検索</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const TextareaGroup: Story = {
  render: () => (
    <InputGroup className="w-[360px]">
      <InputGroupAddon align="block-start">
        <InputGroupText>メモ</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="詳細を入力してください" rows={4} />
    </InputGroup>
  ),
}
