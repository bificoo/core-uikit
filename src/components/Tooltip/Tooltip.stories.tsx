import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tooltip, { TooltipProps } from "components/Tooltip"

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
    placement: {
      control: {
        type: "select",
        options: ["top", "bottom", "right", "left"],
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<TooltipProps> = args => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  content: "Design System Tooltip",
  children: <Button variant="primary">Hover over me</Button>,
}

export const Arrow = Template.bind({})
Arrow.args = {
  arrow: true,
  content: "Design System Tooltip",
  children: <Button variant="primary">Hover over me</Button>,
}
