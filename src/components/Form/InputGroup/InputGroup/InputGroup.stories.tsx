import { Story, Meta } from "@storybook/react"

import Form, { InputGroup, Prepend, Append } from "components/Form"
export default {
  title: "Data Entry/InputGroup",
  component: InputGroup,
  subcomponents: { Prepend, Append },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => (
  <InputGroup>
    <Prepend>$</Prepend>
    <Form.Input placeholder="Enter money" />
    <Append>元</Append>
  </InputGroup>
)

export const Disabled: Story = () => (
  <Form.Group>
    <InputGroup>
      <Prepend>$</Prepend>
      <Form.Input disabled value={1000} />
      <Append>元</Append>
    </InputGroup>
  </Form.Group>
)

export const Validation: Story = () => (
  <Form.Group>
    <InputGroup>
      <Prepend>$</Prepend>
      <Form.Input variant="invalid" />
      <Append>元</Append>
    </InputGroup>
  </Form.Group>
)
