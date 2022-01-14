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

export const Search: Story = () => {
  return <Icon.Search />
}

export const Group: Story = () => {
  return <Icon.Group />
}

export const User: Story = () => {
  return <Icon.User />
}

export const Information: Story = () => {
  return <Icon.Information />
}