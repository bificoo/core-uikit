import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"

export default {
  title: "Data Entry/Select",
  component: Select,
  subcomponents: { "Select.Option": Select.Option },
  argTypes: {},
} as Meta

const options = [
  { value: "Vanilla", eventKey: "vanilla" },
  { value: "Strawberry", eventKey: "strawberry" },
  { value: "Chocolate", eventKey: "chocolate" },
  { value: "Mango", eventKey: "mango" },
  { value: "PassionFruit", eventKey: "passionFruit" },
  { value: "Hazelnut", eventKey: "hazelnut" },
  { value: "Durian", eventKey: "durian" },
  { value: "Apple", eventKey: "apple" },
  { value: "Banana", eventKey: "banana" },
  { value: "Orange", eventKey: "orange" },
  { value: "Cherry", eventKey: "cherry" },
  { value: "Blueberry", eventKey: "blueberry" },
]

export const Default: Story<SelectProps> = () => (
  <Select defaultValue={[options[0]]} placeholder="Select..">
    {options.map(option => (
      <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
        {option.value}
      </Select.Option>
    ))}
  </Select>
)

export const Multiple: Story<SelectProps> = () => (
  <div style={{ display: "flex" }}>
    <Select
      isMulti
      defaultValue={[options[0], options[1]]}
      placeholder="Select.."
      onChange={(e, value) => console.log("onChange", value)}>
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  </div>
)

export const Scroll: Story<SelectProps> = () => (
  <Select placeholder="Select..">
    {options.map(option => (
      <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
        {option.value}
      </Select.Option>
    ))}
  </Select>
)

export const Disabled: Story<SelectProps> = () => (
  <Select isMulti defaultValue={[options[0], options[1]]} disabled>
    {options.map(option => (
      <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
        {option.value}
      </Select.Option>
    ))}
  </Select>
)

export const ValidationError: Story<SelectProps> = () => {
  const options = [
    { value: "Vanilla", eventKey: "vanilla" },
    { value: "Strawberry", eventKey: "strawberry" },
    { value: "Chocolate", eventKey: "chocolate" },
  ]

  return (
    <Select variant="invalid" defaultValue={options[0]} placeholder="Select..">
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} eventKey={option.eventKey}>
          {option.value}
        </Select.Option>
      ))}
    </Select>
  )
}
