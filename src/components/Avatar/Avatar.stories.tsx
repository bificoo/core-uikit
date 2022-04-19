import { Story, Meta } from "@storybook/react"
import Avatar from "../Avatar"

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  return (
    <div>
      <Avatar />
    </div>
  )
}

export const Text: Story = () => {
  return <Avatar>A</Avatar>
}

export const Image: Story = () => {
  return (
    <Avatar>
      <img src="https://img-c.udemycdn.com/user/75x75/147569164_c957.jpg" alt="" />
    </Avatar>
  )
}
