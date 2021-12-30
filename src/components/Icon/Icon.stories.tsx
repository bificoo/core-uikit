import { Story, Meta } from "@storybook/react"
import Icon, { IconArrowProps } from "components/Icon"

export default {
  title: "General/Icon",
  component: Icon.Arrow,
  argTypes: {
    as: {
      control: false,
    },
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
