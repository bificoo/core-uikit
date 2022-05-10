import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import InlineEdit from "components/InlineEdit"
import Form, { InputGroup, Append } from "components/Form"
import Icon from "components/Icon"

export default {
  title: "Data Entry/InlineEdit",
  component: InlineEdit,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const [editValue, setEditValue] = useState("")
  const [editing, setEditing] = useState(false)

  return (
    <div style={{ width: "200px", height: "57px" }}>
      <InlineEdit
        defaultValue={editValue || ""}
        editing={editing}
        editView={ref => <Form.Input autoFocus ref={ref} placeholder="Enter a value" />}
        readView={() => (
          <div>
            <Form.Group>
              <InputGroup>
                <Form.Input value={editValue || "Enter a value"} plaintext />
                <Append>
                  <div onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
                    <Icon name="edit" width={16} height={16} />
                  </div>
                </Append>
              </InputGroup>
            </Form.Group>
          </div>
        )}
        onConfirm={value => {
          setEditValue(value)
          setEditing(false)
        }}
        onCancel={() => {
          setEditing(false)
        }}
      />
    </div>
  )
}
