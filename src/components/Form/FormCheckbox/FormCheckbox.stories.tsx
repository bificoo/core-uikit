import { Story, Meta } from "@storybook/react"

import Form, { FormCheckboxProps } from "components/Form"
export default {
  title: "Components/Form/Checkbox",
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

export const Default = Template.bind({})
Default.args = {
  children: "Checkbox",
}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
  children: "Checkbox",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "複選選項",
}

export const VerticalMulti = () => {
  return (
    <>
      <Form.Checkbox>Checkbox1</Form.Checkbox>
      <Form.Checkbox>Checkbox2</Form.Checkbox>
    </>
  )
}

export const HorizontalMulti = () => {
  return (
    <>
      <Form.Checkbox inline>Checkbox1</Form.Checkbox>
      <Form.Checkbox inline>Checkbox2</Form.Checkbox>
    </>
  )
}
