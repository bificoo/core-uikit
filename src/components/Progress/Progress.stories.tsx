import { Story, Meta } from "@storybook/react"

import Progress from "components/Progress"

export default {
  title: "General/Progress",
  component: Progress,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => {
  return <Progress percent={30} />
}

export const Empty: Story = () => {
  return <Progress percent={0} />
}

export const Full: Story = () => {
  return <Progress percent={100} />
}
