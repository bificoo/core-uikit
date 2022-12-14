import { Story, Meta } from "@storybook/react"
import Form, { FormInputProps } from "components/Form"
export default {
  title: "Data Entry/Form.Input",
  component: Form.Input,
  argTypes: {
    placeholder: {
      description: "Default input placeholder.",
    },
  },
} as Meta

const Template: Story<FormInputProps> = args => {
  return <Form.Input {...args} ref={null} />
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: "Please enter text.",
}

export const Text = Template.bind({})
Text.args = {
  value: "I am text",
}

export const Password = Template.bind({})
Password.args = {
  type: "password",
  value: "password",
}

export const Disabled = Template.bind({})
Disabled.args = {
  value: "I am text",
  disabled: true,
}

export const Plaintext: Story<FormInputProps> = () => {
  return (
    <div>
      <Form.Input plaintext value="I am text"></Form.Input>
      <Form.Input value="I am text"></Form.Input>
    </div>
  )
}

export const Chinese = Template.bind({})
Chinese.args = {
  placeholder: "請輸入文字.",
}

export const WithChineseValue = Template.bind({})
WithChineseValue.args = {
  value: "我是文字",
}
