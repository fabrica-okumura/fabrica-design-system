import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { PageTopButton } from "./page-top-button"

type PageTopButtonProps = React.ComponentProps<typeof PageTopButton>

const meta = {
  title: "Layout/PageTopButton",
  component: PageTopButton,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<PageTopButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
