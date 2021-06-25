import { Story, Meta } from "@storybook/react"
import Dropdown, { DropdownProps } from "components/Dropdown"

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
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

const Template: Story<DropdownProps> = args => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}
