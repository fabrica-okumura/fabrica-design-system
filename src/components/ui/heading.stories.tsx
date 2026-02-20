import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Heading } from "./heading"

type HeadingProps = React.ComponentProps<typeof Heading>

const meta = {
  title: "UI/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["page_title", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<HeadingProps>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: "h1",
    children: "見出し H1",
  },
}

export const H2: Story = {
  args: {
    variant: "h2",
    children: "見出し H2",
  },
}

export const PageTitle: Story = {
  args: {
    variant: "page_title",
    children: "ページタイトル",
  },
}
