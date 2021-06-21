import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import style from "./FormCheckbox.module.scss"

export type FormCheckboxProps = Omit<JSXProps.InputElement, "type">

const FormCheckbox = ({ children, ...props }: FormCheckboxProps) => {
  return (
    <div className={cx("component-checkbox", style.wrapper, props.className)}>
      <label className={style.label}>
        <input type="checkbox" {...props} />
        {!props.checked ? (
          <CheckIcon className={cx(style.check)} />
        ) : (
          <CheckIcon className={cx(style.check)} />
        )}
        <span className={style.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormCheckbox
