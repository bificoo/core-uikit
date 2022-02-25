import { Story, Meta } from "@storybook/react"
import { RangePicker, RangePickerProps } from "components/DatePicker"

export default {
  title: "Data Entry/RangePicker",
  component: RangePicker,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ display: "flex", justifyContent: "center", padding: "30px 0 300px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<RangePickerProps> = args => <RangePicker {...args} />

export const Default = Template.bind({})
Default.args = {
  style: { width: "200px" },
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificStartDate = Template.bind({})
SpecificStartDate.args = {
  style: { width: "200px" },
  startDate: new Date("2021-08-04"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificEndDate = Template.bind({})
SpecificEndDate.args = {
  style: { width: "200px" },
  endDate: new Date("2021-08-14"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificRange = Template.bind({})
SpecificRange.args = {
  style: { width: "200px" },
  startDate: new Date("2021-08-04"),
  endDate: new Date("2021-08-14"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificMinDate = Template.bind({})
SpecificMinDate.args = {
  style: { width: "200px" },
  minDate: new Date("2021-08-3"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificMaxDate = Template.bind({})
SpecificMaxDate.args = {
  style: { width: "200px" },
  maxDate: new Date("2021-08-10"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}

export const SpecificLimitDate = Template.bind({})
SpecificLimitDate.args = {
  style: { width: "200px" },
  minDate: new Date("2021-08-3"),
  maxDate: new Date("2021-08-10"),
  onChange: ({ startDate, endDate }) => {
    console.info(startDate, endDate)
  },
}
