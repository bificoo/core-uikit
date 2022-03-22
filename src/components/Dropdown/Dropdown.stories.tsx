import { Story, Meta } from "@storybook/react"
import Dropdown, { DropdownProps, DropdownActions } from "components/Dropdown"
import Button, { LinkButton } from "components/Button"
import Icon from "components/Icon"
import { useState, useRef } from "react"
import Form from "components/Form"
import { useForm } from "react-hook-form"

export default {
  title: "Navigation/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Toggle": Dropdown.Toggle,
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.Item": Dropdown.Item,
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
          <Icon name="arrow-down" />
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
            <Icon name="arrow-down" />
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
            <Icon name="arrow-down" />
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

export const Virtualized: Story<DropdownProps> = () => {
  const array = ['arguments', 'DropdownToggle', '我是中等長度的文字我是中等長度的文字我是中等長度的文字我是中等長度的文字', '我是文字', 'Row12', 'Row13', 'Row135', 'Row1345', 'Row1453', 'Row13', 'Row13']
  return (
    <div style={{ position: "relative" }}>
      <Dropdown virtualized rowHeight={32}>
        <Dropdown.Toggle>
          <Button>Page actions</Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {array.map((item, idx) => (
            <Dropdown.Item eventKey={idx} key={idx}>{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <Dropdown virtualized rowHeight={32}>
          <Dropdown.Toggle>
            <Button>Page actions</Button>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {array.map((item, idx) => (
              <Dropdown.Item eventKey={idx} key={idx}>{item}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
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
        <div style={{ textAlign: "center" }}>A</div>
        <div style={{ textAlign: "center" }}>B</div>
        <div style={{ textAlign: "center" }}>C</div>
        <Button style={{ width: "100%" }} onClick={() => dropdownRef.current?.close()}>Close</Button>
      </Dropdown.Menu>
    </Dropdown>
  )
}

type Inputs = {
  labels: string[]
}

export const Checkbox: Story<DropdownProps> = () => {
  const {
    register,
    watch,
  } = useForm<Inputs>()

  const labelInfo = watch().labels
  console.log(labelInfo)
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>
          Page actions
          <Icon name="arrow-down" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Form.Checkbox value='edit' {...register("labels")}>Edit</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='share' {...register("labels")}>Share</Form.Checkbox>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const Mix: Story<DropdownProps> = () => {
  const {
    register,
    watch,
  } = useForm<Inputs>()

  const labelInfo = watch().labels
  console.log(labelInfo)

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Button>
          Page actions
          <Icon name="arrow-down" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>
          <div style={{ borderBottom: '1px solid rgb(235, 236, 240)', padding: '0 16px', display: 'flex', alignItems: 'center', height: '36px' }} >
            <Icon name="search" />
            <Form.Input placeholder="請輸入標籤值" style={{ border: 'none' }} />
          </div>
        </Dropdown.Header>
        <Dropdown.Item>
          <Form.Checkbox value='edit' {...register("labels")}>Edit</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='share' {...register("labels")}>Share</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='move' {...register("labels")}>Move</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='clone' {...register("labels")}>Clone</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='delete' {...register("labels")}>Delete</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='report' {...register("labels")}>Report</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='test' {...register("labels")}>Test</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Item>
          <Form.Checkbox value='test2' {...register("labels")}>Test2</Form.Checkbox>
        </Dropdown.Item>
        <Dropdown.Footer>
          <div style={{ borderTop: '1px solid rgb(235, 236, 240)', padding: '0 16px', display: 'flex', alignItems: 'center', height: '36px' }} >
            <LinkButton style={{ marginRight: '8px' }}>確認</LinkButton>
            <LinkButton>清除</LinkButton>
          </div>
        </Dropdown.Footer>
      </Dropdown.Menu>
    </Dropdown>
  )
}