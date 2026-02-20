import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "./checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./field"
import { Input } from "./input"

type FieldProps = React.ComponentProps<typeof Field>

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<FieldProps>

export default meta
type Story = StoryObj<typeof meta>

export const InputField: Story = {
  render: () => (
    <FieldGroup className="w-[360px]">
      <Field>
        <FieldLabel htmlFor="name">氏名</FieldLabel>
        <FieldContent>
          <Input id="name" placeholder="山田 太郎" />
          <FieldDescription>公開プロフィールに表示されます。</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const CheckboxFieldSet: Story = {
  render: () => (
    <FieldSet className="w-[360px]">
      <FieldLegend>通知設定</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox id="notify-mail" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="notify-mail">メール通知</FieldLabel>
          <FieldDescription>重要なお知らせをメールで受け取ります。</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-invalid="true">
        <Checkbox id="notify-sms" />
        <FieldContent>
          <FieldLabel htmlFor="notify-sms">SMS通知</FieldLabel>
          <FieldError>電話番号が未設定です。</FieldError>
        </FieldContent>
      </Field>
    </FieldSet>
  ),
}
