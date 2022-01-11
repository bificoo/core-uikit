import React, { useRef, useState, useEffect } from "react"
import DayPickerInput from "react-day-picker/DayPickerInput"
import { DayPickerInputProps, DayPickerProps } from "react-day-picker/types"
import Form from "components/Form"
import day from "utils/day"
import { formatDate, parseDate } from "../utils"
import styled from "./DatePicker.module.scss"

export type DatePickerProps = {
  /**
   * Date value.
   */
  date: Date
  /**
   * Min selectable date.
   */
  minDate?: Date
  /**
   * Max selectable date.
   */
  maxDate?: Date
  /**
   * Date format.
   */
  dateFormat?: string
  /**
   * Default input placeholder.
   */
  placeholder?: string
  /**
   * Callback when date change.
   */
  onChange?: (date: Date) => void
}

const DatePicker = ({ dateFormat = "YYYY-MM-DD", ...props }: DatePickerProps) => {
  const [date, setDate] = useState(props.date || new Date())
  const datePickerInputRef = useRef<DayPickerInput>(null)

  const dayPickerProps: DayPickerProps = {
    weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    onDayClick: (date: Date, { disabled }) => {
      if (disabled) return
      setDate(date)
      props?.onChange && props.onChange(date)
    },
  }
  if (props?.maxDate) {
    dayPickerProps.disabledDays = {
      after: props.maxDate,
    }
  }
  if (props?.minDate) {
    dayPickerProps.disabledDays = {
      ...dayPickerProps.disabledDays,
      before: props.minDate,
    }
  }

  useEffect(() => {
    setDate(props.date)
  }, [props.date])

  return (
    <div>
      <DayPickerInput
        classNames={{
          container: styled.container,
          overlay: styled.overlay,
          overlayWrapper: styled.overlayWrapper,
        }}
        value={date}
        format={dateFormat}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={props.placeholder || day(new Date()).format(dateFormat)}
        component={React.forwardRef(function FormInput(
          props: DayPickerInputProps["component"],
          ref,
        ) {
          return <Form.Input ref={ref} {...props} />
        })}
        dayPickerProps={dayPickerProps}
        inputProps={{
          ref: datePickerInputRef,
          readOnly: true,
          style: {
            cursor: "pointer",
          },
        }}
      />
    </div>
  )
}

DatePicker.display = DatePicker

export default DatePicker
