import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import styled from "./FormCheckbox.module.scss"

export type FormCheckboxProps = {
  inline?: boolean
} & Omit<JSXProps.InputElement, "type">

const FormCheckbox = ({ children, inline, ...props }: FormCheckboxProps) => {
  return (
    <div
      className={cx(
        "component-checkbox",
        styled.wrapper,
        { [styled.inline]: inline },
        props.className,
      )}>
      <label className={styled.label}>
        <input type="checkbox" {...props} />
        {!props.checked ? (
          <CheckIcon className={cx(styled.check)} />
        ) : (
          <CheckIcon className={cx(styled.check)} />
        )}
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormCheckbox
