import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

type TabsProps = React.ComponentProps<typeof Tabs>

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[420px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-md border p-4 text-sm">
        アカウント情報を管理します。
      </TabsContent>
      <TabsContent value="team" className="rounded-md border p-4 text-sm">
        チームメンバーとロールを管理します。
      </TabsContent>
      <TabsContent value="billing" className="rounded-md border p-4 text-sm">
        請求情報を確認します。
      </TabsContent>
    </Tabs>
  ),
}
