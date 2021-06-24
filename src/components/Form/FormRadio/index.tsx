import cx from "classnames"
import style from "./FormRadio.module.scss"

export type FormRadioProps = Omit<JSXProps.InputElement, "type">

const FormRadio = ({ children, ...props }: FormRadioProps) => {
  return (
    <div className={cx("component-radio", style.wrapper, props.className)}>
      <label className={style.label}>
        <input type="radio" {...props} />
        <span className={style.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormRadio
