import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"

export default {
  title: "Data Entry/Select",
  component: Select,
  argTypes: {},
} as Meta

export const Single: Story<SelectProps> = () => {
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
    <Select defaultValue={options[0]} placeholder="Select..">
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  )
}

export const Multiple: Story<SelectProps> = () => {
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

export const Scroll: Story<SelectProps> = () => {
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

export const Disabled: Story<SelectProps> = () => {
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
    <Select defaultValue={options[0]} placeholder="Select.." disabled>
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  )
}
