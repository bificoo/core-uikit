import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"

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

  return (
    <Select placeholder="Select.." defaultValue={options[0]}>
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
    <>
      <Select isMulti placeholder="Select.." onChange={(e, value) => console.log(value)}>
        {options.map(option => (
          <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
            {option.value}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
