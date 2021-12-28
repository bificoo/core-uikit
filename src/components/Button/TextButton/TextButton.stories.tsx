import { Story, Meta } from "@storybook/react"
import TextButton, { TextButtonProps } from "components/Button/TextButton"
import Icon from "components/Icon"

export default {
  title: "General/TextButton",
  component: TextButton,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const LeftArrow: Story<TextButtonProps> = () => {
  return (
    <TextButton variant="text">
      <Icon.Arrow direction="up" />
      Left Arrow
    </TextButton>
  )
}

export const RightArrow: Story<TextButtonProps> = () => {
  return (
    <TextButton variant="text">
      Right Arrow
      <Icon.Arrow />
    </TextButton>
  )
}

export const ShortText: Story<TextButtonProps> = () => {
  return (
    <TextButton variant="primary">
      <div style={{ display: "flex", flex: 1 }}>7</div>
    </TextButton>
  )
}
