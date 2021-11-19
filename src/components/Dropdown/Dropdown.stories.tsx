import { Story, Meta } from "@storybook/react"
import Dropdown, { DropdownProps } from "components/Dropdown"
import Button from "components/Button"
import React from "react"

export default {
  title: "Navigation/Dropdown",
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
} as Meta

export const Default: Story<DropdownProps> = () => {
  return (
    <Dropdown
      onSelect={(
        e: React.MouseEvent<Element, MouseEvent>,
        { eventKey }: { eventKey?: ReactProps.EventKey },
      ) => {
        console.info(eventKey)
      }}>
      <Dropdown.Toggle>
        <Button>Page actions</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="share">Share</Dropdown.Item>
        <Dropdown.Item eventKey="move">Move</Dropdown.Item>
        <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
        <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
        <Dropdown.Item eventKey="report">Report</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const InlineStyle: Story<DropdownProps> = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>Page actions</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          width: "120px",
          left: "50%",
          position: "absolute",
          transform: "translateX(-50%)",
        }}>
        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="share">Share</Dropdown.Item>
        <Dropdown.Item eventKey="move">Move</Dropdown.Item>
        <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
        <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
        <Dropdown.Item eventKey="report">Report</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const Arrow: Story<DropdownProps> = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>
          Page actions
          <Dropdown.Arrow />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="share">Share</Dropdown.Item>
        <Dropdown.Item eventKey="move">Move</Dropdown.Item>
        <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
        <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
        <Dropdown.Item eventKey="report">Report</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const MultiDropdown: Story<DropdownProps> = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>
          <Button>
            Page actions1
            <Dropdown.Arrow />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
          <Dropdown.Item eventKey="share">Share</Dropdown.Item>
          <Dropdown.Item eventKey="move">Move</Dropdown.Item>
          <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
          <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
          <Dropdown.Item eventKey="report">Report</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle>
          <Button>
            Page actions2
            <Dropdown.Arrow />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
          <Dropdown.Item eventKey="share">Share</Dropdown.Item>
          <Dropdown.Item eventKey="move">Move</Dropdown.Item>
          <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
          <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
          <Dropdown.Item eventKey="report">Report</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export const Disabled: Story<DropdownProps> = () => {
  return (
    <Dropdown
      disabled
      onSelect={(
        e: React.MouseEvent<Element, MouseEvent>,
        { eventKey }: { eventKey?: ReactProps.EventKey },
      ) => {
        console.info(eventKey)
      }}>
      <Dropdown.Toggle>
        <Button disabled>Page actions</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
        <Dropdown.Item eventKey="share">Share</Dropdown.Item>
        <Dropdown.Item eventKey="move">Move</Dropdown.Item>
        <Dropdown.Item eventKey="clone">Clone</Dropdown.Item>
        <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
        <Dropdown.Item eventKey="report">Report</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
