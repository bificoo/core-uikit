import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import styled from "./FormCheckbox.module.scss"

export type FormCheckboxProps = Omit<JSXProps.InputElement, "type">

const FormCheckbox = ({ children, ...props }: FormCheckboxProps) => {
  return (
    <div className={cx("component-checkbox", styled.wrapper, props.className)}>
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
