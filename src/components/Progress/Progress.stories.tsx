import { Story, Meta } from "@storybook/react"

import Progress, { CircleProps, LineProps } from "components/Progress"

export default {
  title: "General/Progress",
  component: Progress,
  subcomponents: {
    Progress: Progress,
  },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story<LineProps> = () => {
  return <Progress percent={30} />
}

export const EmptyBar: Story<LineProps> = () => {
  return <Progress percent={0} />
}

export const FullBar: Story<LineProps> = () => {
  return <Progress percent={120} />
}

export const FullCircle: Story<CircleProps> = () => {
  return <Progress type="circle" percent={125} />
}

export const Circle: Story<CircleProps> = () => {
  return <Progress type="circle" percent={25} />
}

export const EmptyCircle: Story<CircleProps> = () => {
  return <Progress type="circle" percent={0} />
}
