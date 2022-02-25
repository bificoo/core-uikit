import React, { useState, useRef, useEffect } from "react"
import { DateUtils } from "react-day-picker"
import { DayPickerInputProps, DayPickerProps } from "react-day-picker/types"
import DayPickerInputType from "react-day-picker/types/DayPickerInput"
import Form from "components/Form"
import useOutsideEvent from "hooks/useOutsideEvent"
import { formatDate, parseDate } from "../utils"
import styled from "./RangePicker.module.scss"
import { WithComponent } from "types/common"

import DPI from 'react-day-picker/DayPickerInput';
// @ts-ignore
const DayPickerInput = DPI.__esModule ? DPI.default : DPI

export type RangePickerProps = {
  /**
   * Start date.
   */
  startDate?: Date
  /**
   * End date.
   */
  endDate?: Date
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
  onChange?: ({ startDate: endDate }: { startDate: Date | null; endDate: Date | null }) => void
} & WithComponent

const RangePicker = React.forwardRef(function RangePicker(
  { dateFormat = "YYYY-MM-DD", ...props }: RangePickerProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [startDate, setStartDate] = useState<Date | undefined>(props?.startDate)
  const [endDate, setEndDate] = useState<Date | undefined>(props?.endDate)
  const currentMonth = useRef<Date | undefined>(startDate || endDate)
  const datePickerContainerRef = useRef(null)
  const datePickerInputRef = useRef<DayPickerInputType>(null)

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
    onDayClick: (date: Date, { disabled }) => {
      if (disabled) return
      const range = DateUtils.addDayToRange(date, {
        from: startDate,
        to: endDate,
      })
      range.from !== null && setStartDate(range.from)
      range.to !== null && setEndDate(range.to)
      if (!range.from && !range.to) {
        props.onChange &&
          props.onChange({
            startDate: startDate || null,
            endDate: null,
          })
      } else {
        props.onChange &&
          props.onChange({
            startDate: range.from || null,
            endDate: range.to || null,
          })
      }
    },
    onMonthChange: date => {
      currentMonth.current = date
      handleDayChange()
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

  const handleDayChange = () => {
    datePickerInputRef?.current?.setState({ month: currentMonth.current })
  }

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
        style={props.style}
        value={
          startDate &&
          endDate &&
          `${formatDate(startDate, dateFormat)}~${formatDate(endDate, dateFormat)}`
        }
        format={dateFormat}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={
          props.placeholder ||
          `${formatDate(new Date(), dateFormat)} ~ ${formatDate(new Date(), dateFormat)}`
        }
        hideOnDayClick={false}
        component={React.forwardRef(function FormInput(
          props: DayPickerInputProps["component"],
          ref,
        ) {
          return <Form.Input ref={ref} {...props} />
        })}
        dayPickerProps={dayPickerProps}
        inputProps={{
          ref,
          readOnly: true,
          style: {
            cursor: "pointer",
          },
        }}
        onDayChange={handleDayChange}
      />
    </div>
  )
})

export default RangePicker
