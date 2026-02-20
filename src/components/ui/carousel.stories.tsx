import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

type CarouselProps = React.ComponentProps<typeof Carousel>

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<CarouselProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-[420px]">
      <CarouselContent>
        {["Slide 1", "Slide 2", "Slide 3"].map((item) => (
          <CarouselItem key={item}>
            <div className="flex h-40 items-center justify-center rounded-md border bg-muted text-sm font-medium">
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
