import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Skeleton } from "./skeleton"

type SkeletonProps = React.ComponentProps<typeof Skeleton>

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SkeletonProps>

export default meta
type Story = StoryObj<typeof meta>

export const TextLine: Story = {
  render: () => <Skeleton className="h-4 w-[280px]" />,
}

export const Card: Story = {
  render: () => (
    <div className="w-[320px] space-y-3 rounded-md border p-4">
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-24 w-full" />
    </div>
  ),
}
