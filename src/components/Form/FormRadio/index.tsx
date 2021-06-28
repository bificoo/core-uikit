import cx from "classnames"
import styled from "./FormRadio.module.scss"

export type FormRadioProps = Omit<JSXProps.InputElement, "type">

const FormRadio = ({ children, ...props }: FormRadioProps) => {
  return (
    <div className={cx("component-radio", styled.wrapper, props.className)}>
      <label className={styled.label}>
        <input type="radio" {...props} />
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormRadio
