import { Story, Meta } from "@storybook/react"

import { RangePicker, RangePickerProps } from "components/DatePicker"
import React from "react"

export default {
  title: "Data Entry/RangePicker",
  component: RangePicker,
  argTypes: {
    className: {
      control: false,
    },
  },
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
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificStartDate = Template.bind({})
SpecificStartDate.args = {
  startDate: new Date("2021-08-04"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificEndDate = Template.bind({})
SpecificEndDate.args = {
  endDate: new Date("2021-08-14"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificRange = Template.bind({})
SpecificRange.args = {
  startDate: new Date("2021-08-04"),
  endDate: new Date("2021-08-14"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificMinDate = Template.bind({})
SpecificMinDate.args = {
  minDate: new Date("2021-08-3"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificMaxDate = Template.bind({})
SpecificMaxDate.args = {
  maxDate: new Date("2021-08-10"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}

export const SpecificLimitDate = Template.bind({})
SpecificLimitDate.args = {
  minDate: new Date("2021-08-3"),
  maxDate: new Date("2021-08-10"),
  onChange: (startDate, endDate) => {
    console.info(startDate, endDate)
  },
}
