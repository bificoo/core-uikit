import { Story, Meta } from "@storybook/react"

import Progress from "components/Progress"

export default {
  title: "General/Progress",
  component: Progress,
  subcomponents: {
    "Progress.Bar": Progress.Bar,
    "Progress.Circular": Progress.Circular,
  },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => {
  return <Progress.Bar percent={30} />
}

export const Empty: Story = () => {
  return <Progress.Bar percent={0} />
}

export const Full: Story = () => {
  return <Progress.Bar percent={120} />
}

export const FullCircular: Story = () => {
  return (
    <Progress.Circular percent={125} />
  )
}

export const Circular: Story = () => {
  return (
    <Progress.Circular percent={25} />
  )
}
