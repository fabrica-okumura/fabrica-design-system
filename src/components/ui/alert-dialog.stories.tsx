import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "./button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog"

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<AlertDialogProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">削除する</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            この操作は取り消せません。データは完全に削除されます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>削除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
