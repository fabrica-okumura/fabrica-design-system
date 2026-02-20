import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

type TableProps = React.ComponentProps<typeof Table>

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TableProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[640px]">
      <Table>
        <TableCaption>月次レポート</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>担当者</TableHead>
            <TableHead>案件数</TableHead>
            <TableHead>売上</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>田中</TableCell>
            <TableCell>12</TableCell>
            <TableCell>1,200,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>鈴木</TableCell>
            <TableCell>9</TableCell>
            <TableCell>980,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>佐藤</TableCell>
            <TableCell>15</TableCell>
            <TableCell>1,450,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
