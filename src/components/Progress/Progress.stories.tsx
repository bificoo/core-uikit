import { Story, Meta } from "@storybook/react"

import ProgressBar, { ProgressCircle, CircleProps, BarProps } from "components/Progress"

export default {
  title: "General/Progress",
  component: ProgressBar,
  subcomponents: {
    Progress: ProgressBar,
  },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story<BarProps> = () => {
  return <ProgressBar percent={30} />
}

export const EmptyBar: Story<BarProps> = () => {
  return <ProgressBar percent={0} />
}

export const FullBar: Story<BarProps> = () => {
  return <ProgressBar percent={120} />
}

export const FullCircle: Story<CircleProps> = () => {
  return <ProgressCircle percent={125} />
}

export const DefaultCircle: Story<CircleProps> = () => {
  return <ProgressCircle percent={25} />
}

export const EmptyCircle: Story<CircleProps> = () => {
  return <ProgressCircle percent={0} />
}
