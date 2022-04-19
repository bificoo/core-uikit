import cx from "classnames"
import styled from "./FormMessage.module.scss"
import { WithChildren, WithClassName } from "types/common"

export type FormMessageProps = JSX.IntrinsicElements["p"] &
  WithChildren &
  WithClassName & {
    /**
     * Specify the type of the
     */
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
