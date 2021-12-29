import { Story, Meta } from "@storybook/react"
import Button, { ButtonProps, IconButtonProps } from "components/Button"
import Icon from "components/Icon"

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

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Secondary button",
}

export const Important = Template.bind({})
Important.args = {
  variant: "important",
  children: "Important button",
}

export const Selected = Template.bind({})
Selected.args = {
  selected: true,
  children: "Selected button",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: "Disabled button",
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

export const LeftArrow: Story<IconButtonProps> = () => {
  return (
    <Button variant="text" appendIcon>
      <Icon.Arrow direction="up" />
      Left Arrow
    </Button>
  )
}

export const RightArrow: Story<IconButtonProps> = () => {
  return (
    <Button variant="text" appendIcon>
      Right Arrow
      <Icon.Arrow />
    </Button>
  )
}
