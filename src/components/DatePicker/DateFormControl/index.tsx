import React, { useMemo } from "react"
import Form from "components/Form"
import { formatDate } from "../utils"

export type DateFormControlProps = {
  startDate?: Date
  endDate?: Date
  dateFormat?: string
}
const DateFormControl = React.forwardRef(function DateFormControl(
  { dateFormat = "YYYY-MM-DD", startDate, endDate, ...props }: DateFormControlProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const value = useMemo(() => {
    if ((!startDate && !endDate) || !dateFormat) return ""
    const formatStartDate = startDate && formatDate(startDate, dateFormat)
    const formatEndDate = endDate && formatDate(endDate, dateFormat)
    return `${formatStartDate} ~ ${formatEndDate || formatStartDate}`
  }, [startDate, endDate, dateFormat])
  return <Form.Input ref={ref} style={{ width: "200px" }} {...props} value={value} />
})

export default DateFormControl
