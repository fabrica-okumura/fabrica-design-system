import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SectionContainer } from "./section-container"

type SectionContainerProps = React.ComponentProps<typeof SectionContainer>

const meta = {
  title: "UI/SectionContainer",
  component: SectionContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SectionContainerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SectionContainer className="w-[420px]">
      <h3 className="mb-2 text-base font-semibold">セクションタイトル</h3>
      <p className="text-sm text-muted-foreground">
        セクション内コンテンツをまとめるためのコンテナです。
      </p>
    </SectionContainer>
  ),
}
