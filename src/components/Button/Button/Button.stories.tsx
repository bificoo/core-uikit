import { Story, Meta } from "@storybook/react"

import Button, { ButtonProps } from "components/Button"
import ButtonGroup from "components/Button/ButtonGroup"

export default {
  title: "General/Button",
  component: Button,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Primary button",
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  variant: "primary",
  disabled: true,
  children: "Primary disabled button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Secondary button",
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  variant: "secondary",
  disabled: true,
  children: "Secondary disabled button",
}

export const Important = Template.bind({})
Important.args = {
  variant: "important",
  children: "Important button",
}

export const ImportantDisabled = Template.bind({})
ImportantDisabled.args = {
  variant: "important",
  disabled: true,
  children: "Important disabled button",
}

export const Transparent = Template.bind({})
Transparent.args = {
  variant: "transparent",
  children: "Transparent button",
}

export const TransparentDisabled = Template.bind({})
TransparentDisabled.args = {
  variant: "transparent",
  disabled: true,
  children: "Transparent disabled button",
}

export const Block = Template.bind({})
Block.args = {
  block: true,
  children: "Block button",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "按鈕",
}
