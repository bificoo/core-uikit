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

export const Default = Template.bind({})
Default.args = {
  children: "Radio",
}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
  children: "Radio",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "單選選項",
}

export const VerticalMulti = () => {
  return (
    <>
      <Form.Radio>Radio1</Form.Radio>
      <Form.Radio>Radio2</Form.Radio>
    </>
  )
}

export const HorizontalMulti = () => {
  return (
    <>
      <Form.Radio inline>Radio1</Form.Radio>
      <Form.Radio inline>Radio2</Form.Radio>
    </>
  )
}
