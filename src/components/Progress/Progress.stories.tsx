import { Story, Meta } from "@storybook/react"

import Progress, { ProgressCircleProps, ProgressBarProps } from "components/Progress"

export default {
  title: "General/Progress",
  component: Progress,
  subcomponents: {
    "Progress.Circle": Progress.Circle,
  },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story<ProgressBarProps> = () => {
  return <Progress percent={30} />
}

export const EmptyBar: Story<ProgressBarProps> = () => {
  return <Progress percent={0} />
}

export const FullBar: Story<ProgressBarProps> = () => {
  return <Progress percent={120} />
}

export const FullCircle: Story<ProgressCircleProps> = () => {
  return <Progress.Circle percent={125} />
}

export const Circle: Story<ProgressCircleProps> = () => {
  return <Progress.Circle percent={25} />
}

export const EmptyCircle: Story<ProgressCircleProps> = () => {
  return <Progress.Circle percent={0} />
}
