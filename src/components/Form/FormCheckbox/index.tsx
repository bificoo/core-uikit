import React from "react"
import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import styled from "./FormCheckbox.module.scss"
import { WithChildren, WithClassName } from "types/common"

export type FormCheckboxProps = {
  /**
   * If true, the checkbox will be inline style.
   */
  inline?: boolean
  /**
   * If true, the checkbox will be disabled.
   */
  disabled?: boolean
} & WithChildren &
  WithClassName &
  Omit<JSX.IntrinsicElements["input"], "type" | "css">

const FormCheckbox = React.forwardRef(function FormCheckbox(
  { children, inline, ...props }: FormCheckboxProps,
  ref: React.Ref<HTMLInputElement> = null,
) {
  return (
    <div
      className={cx(
        "component-checkbox",
        styled.wrapper,
        { [styled.inline]: inline },
        props.className,
      )}>
      <label className={cx(styled.label, { [styled.disabled]: props.disabled })}>
        <input {...props} ref={ref} type="checkbox" />
        <CheckIcon className={cx(styled.check)} />
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
})

export default FormCheckbox
