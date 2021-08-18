import { Story, Meta } from "@storybook/react"

import DatePicker, { DatePickerProps } from "components/DatePicker"
import React from "react"

export default {
  title: "Components/Date/DatePicker",
  component: DatePicker,
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

const Template: Story<DatePickerProps> = args => <DatePicker {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: date => {
    console.info(date)
  },
}

export const SpecificDate = Template.bind({})
SpecificDate.args = {
  date: new Date("2021-12-06"),
  onChange: date => {
    console.info(date)
  },
}

export const SpecificMinDate = Template.bind({})
SpecificMinDate.args = {
  date: new Date("2021-12-06"),
  minDate: new Date("2021-12-03"),
  onChange: date => {
    console.info(date)
  },
}

export const SpecificMaxDate = Template.bind({})
SpecificMaxDate.args = {
  date: new Date("2021-12-06"),
  maxDate: new Date("2021-12-10"),
  onChange: date => {
    console.info(date)
  },
}

export const SpecificDisabledDays = Template.bind({})
SpecificDisabledDays.args = {
  date: new Date("2021-12-06"),
  minDate: new Date("2021-12-03"),
  maxDate: new Date("2021-12-10"),
  onChange: date => {
    console.info(date)
  },
}

export const DateFormat = Template.bind({})
DateFormat.args = {
  dateFormat: "YYYY.MM.DD",
  onChange: date => {
    console.info(date)
  },
}

export const placeholder = Template.bind({})
placeholder.args = {
  placeholder: "請選擇日期",
  onChange: date => {
    console.info(date)
  },
}
