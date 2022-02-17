import { Story, Meta } from "@storybook/react"
import Dropdown, { DropdownProps, DropdownActions } from "components/Dropdown"
import Button from "components/Button"
import Icon from "components/Icon"
import { useState, useRef } from "react"

export default {
  title: "Navigation/Dropdown",
  component: Dropdown,
  subcomponents: { 
    "Dropdown.Toggle": Dropdown.Toggle ,
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.Item": Dropdown.Item
  },
  argTypes: {},
} as Meta

export const Default: Story<DropdownProps> = () => {
  return (
    <Dropdown
      onSelect={(_, { eventKey }: { eventKey?: ReactProps.EventKey }) => {
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

export const Arrow: Story<DropdownProps> = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>
          Page actions
          <Icon.Arrow />
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
      <Dropdown style={{ marginRight: "10px" }}>
        <Dropdown.Toggle>
          <Button>
            Page actions1
            <Icon.Arrow />
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
            <Icon.Arrow />
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
      onSelect={(_, { eventKey }: { eventKey?: ReactProps.EventKey }) => {
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

export const Adaptive: Story<DropdownProps> = () => {
  const [value, setValue] = useState("我是文字")
  return (
    <Dropdown
      onSelect={(_, { eventKey }: { eventKey?: ReactProps.EventKey }) => {
        setValue(eventKey + "")
      }}>
      <Dropdown.Toggle>
        <Button>{value}</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="短">短</Dropdown.Item>
        <Dropdown.Item eventKey="我是中等長度的文字">我是中等長度的文字</Dropdown.Item>
        <Dropdown.Item eventKey="我是文字">我是文字</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const ControlMenuDisplay: Story<DropdownProps> = () => {
  const dropdownRef = useRef<DropdownActions>(null);

  return (
    <Dropdown ref={dropdownRef}>
      <Dropdown.Toggle>
        <Button>Answer</Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div style={{ textAlign: "center"}}>A</div>
        <div style={{ textAlign: "center"}}>B</div>
        <div style={{ textAlign: "center"}}>C</div>
        <Button style={{ width: "100%" }} onClick={() => dropdownRef.current?.close()}>Close</Button>
      </Dropdown.Menu>
    </Dropdown>
  )
}

