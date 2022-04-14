import { Story, Meta } from "@storybook/react"
import { RangePicker, RangePickerProps } from "components/DatePicker"
import Form from "components/Form"

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

export const Default: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificStartDate: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      startDate={new Date("2021-08-04")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificEndDate: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      endDate={new Date("2021-08-14")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificRange: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      startDate={new Date("2021-08-04")}
      endDate={new Date("2021-08-14")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificMinDate: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      minDate={new Date("2021-08-03")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificMaxDate: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      maxDate={new Date("2021-08-10")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const SpecificLimitDate: Story<RangePickerProps> = () => {
  return (
    <RangePicker
      style={{ width: "240px" }}
      minDate={new Date("2021-08-03")}
      maxDate={new Date("2021-08-10")}
      onChange={({ startDate, endDate }) => {
        console.info(startDate, endDate)
      }} />
  )
}

export const Invalid: Story<RangePickerProps> = () => {
  return (
    <Form.Group>
      <RangePicker
        style={{ width: "240px" }}
        inputProps={{ variant: "invalid" }}
        onChange={({ startDate, endDate }) => {
          console.info(startDate, endDate)
        }} />
    </Form.Group>
  )
}
