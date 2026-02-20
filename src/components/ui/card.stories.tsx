import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "./button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

type CardProps = React.ComponentProps<typeof Card>

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>プロジェクト設定</CardTitle>
        <CardDescription>通知とアクセス権限を管理します。</CardDescription>
      </CardHeader>
      <CardContent>チームメンバーに共有する前に設定を確認してください。</CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">保存</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>月次レポート</CardTitle>
        <CardDescription>先月の成果を確認できます。</CardDescription>
        <CardAction>
          <Button size="sm" variant="neutral">
            詳細
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>売上は前月比で 12% 増加しています。</CardContent>
    </Card>
  ),
}
