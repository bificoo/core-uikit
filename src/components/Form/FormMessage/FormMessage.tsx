import cx from "classnames"
import styled from "./FormMessage.module.scss"
export type FormMessageProps = JSXProps.PElement & {
  variant: "helper" | "valid" | "error"
}

const FormMessage = ({ className, ...props }: FormMessageProps) => {
  return (
    <p className={cx(styled.wrapper, styled[props.variant], className)} {...props}>
      {props.children}
    </p>
  )
}

export default FormMessage
