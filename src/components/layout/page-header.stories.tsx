import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { PageHeader } from "./page-header"

type PageHeaderProps = React.ComponentProps<typeof PageHeader>

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<PageHeaderProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
