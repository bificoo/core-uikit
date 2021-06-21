import cx from "classnames"
// import { ReactComponent as CheckIcon } from "./check.svg"
import style from "./FormRadio.module.scss"

export type FormRadioProps = Omit<JSXProps.InputElement, "type">

const FormRadio = ({ children, ...props }: FormRadioProps) => {
  return (
    <div className={cx("component-radio", style.wrapper, props.className)}>
      <label className={style.label}>
        <input type="radio" {...props} />
        {/* {!props.checked ? (
          <CheckIcon className={cx(style.check)} />
        ) : (
          <CheckIcon className={cx(style.check)} />
        )} */}
        <span className={style.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormRadio
