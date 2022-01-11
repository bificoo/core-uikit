import { Story, Meta } from "@storybook/react"
import Icon, { IconArrowProps } from "components/Icon"

export default {
  title: "General/Icon",
  component: Icon.Arrow,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const ArrowIconDirectionUp: Story<IconArrowProps> = () => {
  return <Icon.Arrow direction={"up"} />
}

export const ArrowIconDirectionDown: Story<IconArrowProps> = () => {
  return <Icon.Arrow />
}

export const ArrowIconDirectionRight: Story<IconArrowProps> = () => {
  return <Icon.Arrow direction={"right"} />
}

export const ArrowIconDirectionLeft: Story<IconArrowProps> = () => {
  return <Icon.Arrow direction={"left"} />
}
