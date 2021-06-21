import { Story, Meta } from "@storybook/react"

import Form, { FormCheckboxProps } from "components/Form"
export default {
  title: "General/Form/Checkbox",
  component: Form.Checkbox,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<FormCheckboxProps> = ({ children, ...args }) => {
  return (
    <Form.Checkbox {...args} ref={null}>
      {children}
    </Form.Checkbox>
  )
}

export const Check = Template.bind({})
Check.args = {
  children: "checkbox",
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  children: "checkbox",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "複選選項",
}
