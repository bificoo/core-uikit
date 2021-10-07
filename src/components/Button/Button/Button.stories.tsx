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

export const Group: Story = () => {
  return (
    <div>
      <ButtonGroup
        onSelect={(
          e: React.MouseEvent<Element, MouseEvent>,
          { eventKey }: { eventKey?: ReactProps.EventKey },
        ) => {
          console.info(eventKey)
        }}>
        <Button eventKey="日">日</Button>
        <Button eventKey="周">周</Button>
        <Button eventKey="月">月</Button>
      </ButtonGroup>
    </div>
  )
}
