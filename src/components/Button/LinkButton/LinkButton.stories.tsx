import { Story, Meta } from "@storybook/react"

import { LinkButton, LinkButtonProps } from "components/Button"

export default {
  title: "General/LinkButton",
  component: LinkButton,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

const Template: Story<LinkButtonProps> = args => <LinkButton {...args} />

export const Link = Template.bind({})
Link.args = {
  children: "Link button",
}

export const Chinese = Template.bind({})
Chinese.args = {
  children: "行內連結",
}
