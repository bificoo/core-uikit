import { Story, Meta } from "@storybook/react"

import Button, { ButtonProps } from "components/Button"

export default {
  title: "General/Button",
  component: Button,
  argTypes: {
    as: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "secondary",
}

export const Link = Template.bind({})
Link.args = {
  variant: "link",
  children: "link",
}
