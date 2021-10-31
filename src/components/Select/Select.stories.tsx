import { Story, Meta } from "@storybook/react"
import Select, { SelectProps } from "components/Select"

export default {
  title: "Data Entry/Select",
  component: Select,
  argTypes: {},
} as Meta

const Template: Story<SelectProps> = args => <Select {...args} />

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  options: [
    { label: "Vanilla", value: "vanilla" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Mango", value: "mango" },
    { label: "Passionfruit", value: "passionfruit" },
    { label: "Hazelnut", value: "hazelnut" },
    { label: "Durian", value: "durian" },
  ],
  placeholder: "Select..",
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  isMulti: true,
  options: [
    { label: "Vanilla", value: "vanilla" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Chocolate", value: "chocolate" },
    { label: "Mango", value: "mango" },
    { label: "Passionfruit", value: "passionfruit" },
    { label: "Hazelnut", value: "hazelnut" },
    { label: "Durian", value: "durian" },
  ],
  placeholder: "Select..",
}
