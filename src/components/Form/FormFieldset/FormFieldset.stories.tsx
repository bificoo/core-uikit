import { Story, Meta } from "@storybook/react"

import Form from "components/Form"
export default {
  title: "Data Entry/Form.Fieldset",
  component: Form.Group,
  subcomponents: { FormInput: Form.Input },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => (
  <Form.Group layout="horizontal">
    <Form.Fieldset>
      <Form.Checkbox inline value="Male">
        男
      </Form.Checkbox>
    </Form.Fieldset>
    <Form.Fieldset disabled>
      <Form.Checkbox inline value="Female">
        女
      </Form.Checkbox>
    </Form.Fieldset>
  </Form.Group>
)

export const Inline: Story = () => (
  <Form.Group layout="horizontal">
    <div>
      <Form.Fieldset inline>
        <Form.Checkbox inline value="Male">
          男
        </Form.Checkbox>
      </Form.Fieldset>
      <Form.Fieldset disabled inline>
        <Form.Checkbox inline value="Female">
          女
        </Form.Checkbox>
      </Form.Fieldset>
    </div>
  </Form.Group>
)
