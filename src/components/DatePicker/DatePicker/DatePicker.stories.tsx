import { Story, Meta } from "@storybook/react"

import DatePicker, { DatePickerProps } from "components/DatePicker"

export default {
  title: "Data Entry/DatePicker",
  component: DatePicker,
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ display: "flex", justifyContent: "center", padding: "30px 0 300px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date()}
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const SpecificDate: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date("2021-12-06")}
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const SpecificMinDate: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date("2021-12-06")}
      minDate={new Date("2021-12-03")}
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const SpecificMaxDate: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date("2021-12-06")}
      maxDate={new Date("2021-12-10")}
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const SpecificDisabledDays: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date("2021-12-06")}
      minDate={new Date("2021-12-03")}
      maxDate={new Date("2021-12-10")}
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const DateFormat: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      dateFormat="YYYY.MM.DD"
      onChange={date => {
        console.info(date)
      }} />
  )
}

export const Placeholder: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      placeholder="請選擇日期"
      onChange={date => {
        console.info(date)
      }} />
  )
}


export const Disabled: Story<DatePickerProps> = () => {
  return (
    <DatePicker
      date={new Date()}
      disabled={true} />
  )
}
