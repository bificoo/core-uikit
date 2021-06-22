import { Story, Meta } from "@storybook/react"

import Form, { FormRadioProps } from "components/Form"
export default {
  title: "Components/Form/Radio",
  component: Form.Radio,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<FormRadioProps> = ({ children, ...args }) => {
  return (
    <Form.Radio {...args} ref={null}>
      {children}
    </Form.Radio>
  )
}

export const Check = Template.bind({})
Check.args = {
  children: "Radio",
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  children: "Radio",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "單選選項",
}
