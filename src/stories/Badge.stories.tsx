import { Story, Meta } from "@storybook/react"
import Badge, { BadgeProps } from "components/Badge"

export default {
  title: "General/Badge",
  component: Badge,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<BadgeProps> = args => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  pill: true,
  children: "5",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  pill: true,
  children: 20,
}

export const Important = Template.bind({})
Important.args = {
  variant: "important",
  pill: true,
  children: "99+",
}

export const SecondaryEnglish = Template.bind({})
SecondaryEnglish.args = {
  variant: "secondary",
  pill: true,
  children: "New",
}

export const SecondaryChinese = Template.bind({})
SecondaryChinese.args = {
  variant: "secondary",
  pill: true,
  children: "標籤樣式",
}
