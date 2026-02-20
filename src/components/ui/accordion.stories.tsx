import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

type AccordionProps = React.ComponentProps<typeof Accordion>

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "w-[420px]",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
} satisfies Meta<AccordionProps>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>配送について</AccordionTrigger>
        <AccordionContent>
          通常配送は注文確定から2-4営業日でお届けします。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>返品・交換について</AccordionTrigger>
        <AccordionContent>
          商品到着後7日以内であれば返品・交換を受け付けています。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>支払い方法について</AccordionTrigger>
        <AccordionContent>
          クレジットカード、銀行振込、各種ウォレット決済に対応しています。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    type: "multiple",
    defaultValue: ["item-1", "item-2"],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>アカウント設定</AccordionTrigger>
        <AccordionContent>
          プロフィール、通知、セキュリティの設定を変更できます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>注文履歴</AccordionTrigger>
        <AccordionContent>
          過去の注文内容と配送ステータスを確認できます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>サポート</AccordionTrigger>
        <AccordionContent>
          お問い合わせフォームからサポートチームへ連絡できます。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
