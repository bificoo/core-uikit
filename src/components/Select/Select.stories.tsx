import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"

export default {
  title: "Data Entry/Select",
  component: Select,
  argTypes: {},
} as Meta

export const SingleSelect: Story<SelectProps> = () => {
  const options = [
    { label: "Vanilla", value: "vanilla" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Mango", value: "mango" },
    { label: "Passionfruit", value: "passionfruit" },
    { label: "Hazelnut", value: "hazelnut" },
    { label: "Durian", value: "durian" },
  ]

  return (
    <Select placeholder="Select..">
      {options.map(option => (
        <Select.Option key={option.value} label={option.label} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  )
}

export const MultiSelect: Story<SelectProps> = () => {
  const options = [
    { label: "Vanilla", value: "vanilla" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Mango", value: "mango" },
    { label: "Passionfruit", value: "passionfruit" },
    { label: "Hazelnut", value: "hazelnut" },
    { label: "Durian", value: "durian" },
  ]

  return (
    <Select isMulti placeholder="Select.." onChange={value => console.log(value)}>
      {options.map(option => (
        <Select.Option key={option.value} label={option.label} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  )
}
