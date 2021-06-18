import { Story, Meta } from "@storybook/react"

import Form, { FormCheckProps } from "components/Form"
export default {
  title: "General/Form/Check",
  component: Form.Check,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<FormCheckProps> = ({ children, ...args }) => {
  return (
    <Form.Check {...args} ref={null}>
      {children}
    </Form.Check>
  )
}

export const Check = Template.bind({})
Check.args = {
  children: "checkbox",
}

export const Chinses = Template.bind({})
Chinses.args = {
  children: "複選選項",
}
