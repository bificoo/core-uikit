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
  children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
}

export const Success = Template.bind({})
Success.args = {
  variant: "success",
  children: "Success",
}

export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
  children: "Danger",
}

export const Warning = Template.bind({})
Warning.args = {
  variant: "warning",
  children: "Warning",
}

export const Info = Template.bind({})
Info.args = {
  variant: "info",
  children: "Info",
}

export const Light = Template.bind({})
Light.args = {
  variant: "light",
  children: "Light",
}

export const Dark = Template.bind({})
Dark.args = {
  variant: "dark",
  children: "Dark",
}
