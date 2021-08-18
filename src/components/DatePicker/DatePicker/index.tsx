import React, { useRef, useState, useEffect } from "react"
import DayPickerInput from "react-day-picker/DayPickerInput"
import { DayPickerInputProps, DayPickerProps } from "react-day-picker/types"
import Form from "components/Form"
import useOutsideEvent from "hooks/useOutsideEvent"
import day from "utils/day"
import { formatDate, parseDate } from "../utils"
import styled from "./DatePicker.module.scss"

export type DatePickerProps = {
  date: Date
  minDate?: Date
  maxDate?: Date
  dateFormat?: string
  placeholder?: string
  onChange?: (date: Date) => void
}

const DatePicker = ({ dateFormat = "YYYY-MM-DD", ...props }: DatePickerProps) => {
  const [date, setDate] = useState(props.date || new Date())
  const datePickerContainerRef = useRef(null)
  const datePickerInputRef = useRef<DayPickerInput>(null)

  const dayPickerProps: DayPickerProps = {
    weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    onDayClick: (date: Date, { selected, disabled }) => {
      if (selected || disabled) return
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

  useOutsideEvent({
    refs: [datePickerContainerRef],
    onClickOutside: () => {
      datePickerInputRef?.current?.hideDayPicker()
    },
  })

  useEffect(() => {
    setDate(props.date)
  }, [props.date])

  return (
    <div ref={datePickerContainerRef}>
      <DayPickerInput
        ref={datePickerInputRef}
        classNames={{
          container: styled.container,
          overlay: styled.overlay,
          overlayWrapper: styled.overlayWrapper,
        }}
        value={date}
        format={dateFormat}
        formatDate={formatDate}
        parseDate={parseDate}
        hideOnDayClick={false}
        placeholder={props.placeholder || day(new Date()).format(dateFormat)}
        component={(props: DayPickerInputProps["component"]) => <Form.Input {...props} />}
        dayPickerProps={dayPickerProps}
      />
    </div>
  )
}

export default DatePicker
