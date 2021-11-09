import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"
import Button from "components/Button"

export default {
  title: "Data Entry/Select",
  component: Select,
  argTypes: {},
} as Meta

export const SingleSelect: Story<SelectProps> = () => {
  const options = [
    { value: "Vanilla", eventKey: "vanilla" },
    { value: "Strawberry", eventKey: "strawberry" },
    { value: "Chocolate", eventKey: "chocolate" },
    { value: "Mango", eventKey: "mango" },
    { value: "Passionfruit", eventKey: "passionfruit" },
    { value: "Hazelnut", eventKey: "hazelnut" },
    { value: "Durian", eventKey: "durian" },
  ]

  //  defaultValue={options[0]}
  return (
    <Select placeholder="Select..">
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  )
}

export const MultiSelect: Story<SelectProps> = () => {
  const options = [
    { value: "Vanilla", eventKey: "vanilla" },
    { value: "Strawberry", eventKey: "strawberry" },
    { value: "Chocolate", eventKey: "chocolate" },
    { value: "Mango", eventKey: "mango" },
    { value: "Passionfruit", eventKey: "passionfruit" },
    { value: "Hazelnut", eventKey: "hazelnut" },
    { value: "Durian", eventKey: "durian" },
  ]

  return (
    <div style={{ display: "flex" }}>
      <Select isMulti placeholder="Select.." onChange={(e, value) => console.log(value)}>
        {options.map(option => (
          <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
            {option.value}
          </Select.Option>
        ))}
      </Select>
    </div>
  )
}

export const ScrollSelect: Story<SelectProps> = () => {
  const options = [
    { value: "Vanilla", eventKey: "vanilla" },
    { value: "Strawberry", eventKey: "strawberry" },
    { value: "Chocolate", eventKey: "chocolate" },
    { value: "Mango", eventKey: "mango" },
    { value: "Passionfruit", eventKey: "passionfruit" },
    { value: "Hazelnut", eventKey: "hazelnut" },
    { value: "Durian", eventKey: "durian" },
    { value: "Apple", eventKey: "apple" },
    { value: "Banana", eventKey: "banana" },
    { value: "Orange", eventKey: "orange" },
    { value: "Cherry", eventKey: "cherry" },
    { value: "Blueberry", eventKey: "blueberry" },
  ]

  return (
    <Select placeholder="Select..">
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  )
}
