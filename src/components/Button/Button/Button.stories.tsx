import { Story, Meta } from "@storybook/react"
import Button, { ButtonProps } from "components/Button"
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

export const Text = Template.bind({})
Text.args = {
  variant: "text",
  children: "Text button",
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

export const LeftArrowIcon: Story<ButtonProps> = () => {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Button>Left Arrow</Button>
      </div>
      <div>
        <Button>
          <Icon.Arrow />
          Left Arrow
        </Button>
      </div>
    </>
  )
}

export const RightArrowIcon: Story<ButtonProps> = () => {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Button>Right Arrow</Button>
      </div>
      <div>
        <Button>
          Right Arrow
          <Icon.Arrow />
        </Button>
      </div>
    </>
  )
}
