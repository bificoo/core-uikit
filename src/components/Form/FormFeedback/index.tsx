import cx from "classnames"
import styled from "./FormFeedback.module.scss"
export type FormFeedbackProps = JSXProps.PElement

const FormFeedback = ({ className, ...props }: FormFeedbackProps) => {
  return (
    <p className={cx(styled.wrapper, className)} {...props}>
      {props.children}
    </p>
  )
}

export default FormFeedback
