import { Story, Meta } from "@storybook/react"

import Form, { FormTextareaProps } from "components/Form"
export default {
  title: "Components/Form/Textarea",
  component: Form.Textarea,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<FormTextareaProps> = args => {
  return <Form.Textarea {...args} ref={null} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: "Please enter text.",
}

export const Chinese = Template.bind({})
Chinese.args = {
  placeholder: "請輸入文字.",
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: "I am text",
}

export const WithChineseValue = Template.bind({})
WithChineseValue.args = {
  value: "我是文字",
}

export const Disabled = Template.bind({})
Disabled.args = {
  value: "I am text",
  disabled: true,
}
