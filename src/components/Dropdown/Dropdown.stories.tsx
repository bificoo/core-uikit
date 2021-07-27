import { Story, Meta } from "@storybook/react"
import Dropdown, { DropdownProps } from "components/Dropdown"
import Button from "components/Button"

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
    toggleComponent: {
      control: false,
    },
    menuComponent: {
      control: false,
    },
    itemComponent: {
      control: false,
    },
  },
  decorators: [Story => <Story />],
} as Meta

export const Default: Story<DropdownProps> = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>Page actions</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu onSelect={(e, { eventKey }) => console.info(e, eventKey)}>
        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
        <Dropdown.Item>Share</Dropdown.Item>
        <Dropdown.Item>Move</Dropdown.Item>
        <Dropdown.Item>Clone</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
        <Dropdown.Item>Report</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
