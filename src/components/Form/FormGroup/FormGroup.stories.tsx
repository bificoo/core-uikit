import { Story, Meta } from "@storybook/react"

import Form, { FormGroupProps } from "components/Form"
export default {
  title: "Components/Form/Group",
  component: Form.Group,
  subcomponents: { FormInput: Form.Input },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const FormGroup: Story = () => (
  <Form.Group label={<Form.Label>Form label：</Form.Label>}>
    <Form.Input />
  </Form.Group>
)

export const FormGroupWithInput: Story = () => (
  <Form.Group
    label={
      <Form.Label required htmlFor="form-group-name">
        Name：
      </Form.Label>
    }>
    <Form.Input id="form-group-name" />
  </Form.Group>
)

export const FormGroupWithTextarea: Story = () => (
  <Form.Group formId="form-group-memo" label={<Form.Label>Memo：</Form.Label>}>
    <Form.Textarea />
  </Form.Group>
)

export const FormGroupWithInput1: Story = () => (
  <Form.Group label={<Form.Label htmlFor="form-group-name1">Name：</Form.Label>}>
    <Form.Input id="form-group-name1" />
  </Form.Group>
)
FormGroupWithInput1.storyName = "點擊標題觸發表單"

export const FormGroupWithInput2: Story = () => (
  <Form.Group formId="form-group-name2" label={<Form.Label>Name：</Form.Label>}>
    <Form.Input />
  </Form.Group>
)
FormGroupWithInput2.storyName = "點擊標題觸發表單（透過 formId）"
