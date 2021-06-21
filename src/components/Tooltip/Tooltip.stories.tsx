import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tooltip, { TooltipProps } from "components/Tooltip"

export default {
  title: "General/Tooltip",
  component: Tooltip,
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} as Meta

const Template: Story<TooltipProps> = args => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  content: "Design System Tooltip",
  children: <Button variant="primary">Hover over me</Button>,
}
