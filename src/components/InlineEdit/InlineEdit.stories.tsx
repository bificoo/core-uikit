import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import InlineEdit from "components/InlineEdit"
import Form, { InputGroup, Append } from "components/Form"
import Icon from "components/Icon"
import { useForm } from "react-hook-form"

type Inputs = {
  name: string
}

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

export const Validation: Story = () => {
  const [name, setName] = useState("Pearl")
  const [editingValidation, setEditingValidation] = useState(false)

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
  })
  const nameRegister = register("name", { required: true, minLength: 1, maxLength: 8 })

  return (
    <div
      style={{ width: "450px", height: "57px", display: "flex", justifyContent: "space-between" }}>
      <InlineEdit
        defaultValue={name || ""}
        editing={editingValidation}
        editView={ref => {
          return (
            <div>
              <Form.Input
                autoFocus
                {...nameRegister}
                ref={e => {
                  nameRegister.ref(e)
                  ref.current = e
                }}
                {...(["maxLength", "minLength", "required"].some(el => el === errors?.name?.type)
                  ? { variant: "invalid" }
                  : {})}
                placeholder="Enter a value"
              />
            </div>
          )
        }}
        readView={() => (
          <div>
            <Form.Group>
              <InputGroup>
                <Form.Input value={name || "Enter a name"} plaintext />
                <Append>
                  <div onClick={() => setEditingValidation(true)} style={{ cursor: "pointer" }}>
                    <Icon name="edit" width={16} height={16} />
                  </div>
                </Append>
              </InputGroup>
            </Form.Group>
          </div>
        )}
        onConfirm={value => {
          if (Object.keys(errors).length !== 0) return
          else {
            setName(value)
            setEditingValidation(false)
          }
        }}
        onCancel={() => {
          setEditingValidation(false)
          reset({ name: "" })
        }}
      />
      {errors?.name?.type === "required" && (
        <Form.ErrorMessage>This field is required</Form.ErrorMessage>
      )}
      {errors?.name?.type === "maxLength" && (
        <Form.ErrorMessage>Password cannot exceed 8 characters</Form.ErrorMessage>
      )}
    </div>
  )
}
