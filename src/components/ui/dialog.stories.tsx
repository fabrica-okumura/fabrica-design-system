import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "./button"
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

type DialogProps = React.ComponentProps<typeof Dialog>

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<DialogProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>モーダルを開く</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>プロフィール編集</DialogTitle>
          <DialogDescription>
            変更内容を確認して保存してください。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="neutral">キャンセル</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>保存</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
