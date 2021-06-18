import cx from "classnames"
import { ReactComponent as CheckIcon } from "./check.svg"
import style from "./FormCheck.module.scss"

export type FormCheckProps = Omit<JSXProps.InputElement, "type">

const FormCheck = ({ children, ...props }: FormCheckProps) => {
  return (
    <div className={cx("component-check", style.wrapper, props.className)}>
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

export default FormCheck
