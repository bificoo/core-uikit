import React from "react"
import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import styled from "./FormCheckbox.module.scss"

export type FormCheckboxProps = {
  inline?: boolean
} & Omit<JSXProps.InputElement, "type">

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
