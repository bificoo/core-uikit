import React, { useState, useRef, useCallback, useEffect } from "react"
import { DateUtils } from "react-day-picker"
import { DayPickerInputProps, DayPickerProps } from "react-day-picker/types"
import DayPickerInput from "react-day-picker/DayPickerInput"
import DateFormControl from "../DateFormControl"
import useOutsideEvent from "hooks/useOutsideEvent"
import { formatDate, parseDate } from "../utils"
import styled from "./RangePicker.module.scss"

export type RangePickerProps = {
  startDate?: Date
  endDate?: Date
  minDate?: Date
  maxDate?: Date
  dateFormat?: string
  placeholder?: string
  onChange?: (startDate: Date, endDate: Date) => void
}

const RangePicker = ({ dateFormat = "YYYY-MM-DD", ...props }) => {
  const start = props?.startDate || props?.endDate
  const [startDate, setStartDate] = useState<Date | undefined>(start)
  const [endDate, setEndDate] = useState<Date | undefined>(props?.endDate)
  const currentMonth = useRef<Date | undefined>(startDate)
  const datePickerContainerRef = useRef(null)
  const datePickerInputRef = useRef<DayPickerInput>(null)

  const dayPickerProps: DayPickerProps = {
    className: styled.wrapper,
    numberOfMonths: 2,
    month: startDate,
    weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    selectedDays: [startDate, { from: startDate, to: endDate }],
    modifiers: {
      start: startDate,
      end: endDate,
    },
    onDayClick: (date: Date, { selected, disabled }) => {
      if (disabled) return
      const range = DateUtils.addDayToRange(date, {
        from: startDate,
        to: endDate,
      })
      range.from !== null && setStartDate(range.from)
      range.to !== null && setEndDate(range.to)
      props.onChange && props.onChange(range.from, range.to)
    },
    onMonthChange: date => {
      currentMonth.current = date
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

  const handleDayChange = useCallback(() => {
    datePickerInputRef?.current?.setState({ month: currentMonth.current })
  }, [startDate])

  useOutsideEvent({
    refs: [datePickerContainerRef],
    onClickOutside: () => {
      datePickerInputRef?.current?.hideDayPicker()
    },
  })

  useEffect(() => {
    setStartDate(props.startDate)
  }, [props.startDate])

  useEffect(() => {
    setEndDate(props.endDate)
  }, [props.endDate])

  return (
    <div ref={datePickerContainerRef}>
      <DayPickerInput
        ref={datePickerInputRef}
        classNames={{
          container: styled.container,
          overlay: styled.overlay,
          overlayWrapper: styled.overlayWrapper,
        }}
        value={startDate}
        format={dateFormat}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={
          props.placeholder ||
          `${formatDate(new Date(), dateFormat)} ~ ${formatDate(new Date(), dateFormat)}`
        }
        hideOnDayClick={false}
        component={(props: DayPickerInputProps["component"]) => (
          <DateFormControl
            startDate={startDate}
            endDate={endDate}
            dateFormat={dateFormat}
            {...props}
          />
        )}
        dayPickerProps={dayPickerProps}
        onDayChange={handleDayChange}
      />
    </div>
  )
}

export default RangePicker
