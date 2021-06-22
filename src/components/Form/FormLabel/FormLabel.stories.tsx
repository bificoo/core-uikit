import { Story, Meta } from "@storybook/react"

import Form, { FormLabelProps } from "components/Form"
export default {
  title: "Components/Form/Label",
  component: Form.Checkbox,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<FormLabelProps> = ({ children, ...args }) => {
  return (
    <Form.Label {...args} ref={null}>
      {children}
    </Form.Label>
  )
}

export const Label = Template.bind({})
Label.args = {
  children: "Label",
}

export const Required = Template.bind({})
Required.args = {
  required: true,
  children: "Label",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "文字",
}
