import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import styled from "./FormCheckbox.module.scss"
import React from "react"

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
      <label className={styled.label}>
        <input ref={ref} type="checkbox" {...props} />
        {!props.checked ? (
          <CheckIcon className={cx(styled.check)} />
        ) : (
          <CheckIcon className={cx(styled.check)} />
        )}
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
})

export default FormCheckbox
