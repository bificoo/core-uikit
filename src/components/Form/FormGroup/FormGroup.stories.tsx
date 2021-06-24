import { Story, Meta } from "@storybook/react"

import Form from "components/Form"
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

export const Default: Story = () => (
  <Form.Group>
    <Form.Label>Form label：</Form.Label>
    <Form.Input />
  </Form.Group>
)

export const FormGroupWithRequiredInput: Story = () => (
  <Form.Group>
    <Form.Label required>Name：</Form.Label>
    <Form.Input />
  </Form.Group>
)

export const FormGroupWithTextarea: Story = () => (
  <Form.Group>
    <Form.Label>Memo：</Form.Label>
    <Form.Textarea />
  </Form.Group>
)
