import { Story, Meta } from "@storybook/react"

import Progress, { ProgressCircularProps, ProgressBarProps } from "components/Progress"

export default {
  title: "General/Progress",
  component: Progress.Bar,
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

export const Default: Story<ProgressBarProps> = () => {
  return <Progress.Bar percent={30} />
}

export const EmptyBar: Story<ProgressBarProps> = () => {
  return <Progress.Bar percent={0} />
}

export const FullBar: Story<ProgressBarProps> = () => {
  return <Progress.Bar percent={120} />
}

export const FullCircular: Story<ProgressCircularProps> = () => {
  return (
    <Progress.Circular percent={125} />
  )
}

export const Circular: Story<ProgressCircularProps> = () => {
  return (
    <Progress.Circular percent={25} />
  )
}

export const EmptyCircular: Story<ProgressCircularProps> = () => {
  return (
    <Progress.Circular percent={0} />
  )
}
