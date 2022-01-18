import cx from "classnames"
import styled from "./FormFieldset.module.scss"
import { WithChildren, WithClassName } from "types/common"

export type FormFieldsetProps = {
  /**
   * If true, the checkbox will be inline style.
   */
  inline?: boolean
} & WithChildren & WithClassName & JSX.IntrinsicElements["fieldset"]

const FormFieldset = ({ inline = false, className, ...props }: FormFieldsetProps) => {
  return (
    <fieldset className={cx(styled.wrapper, { [styled.inline]: inline }, className)} {...props}>
      {props.children}
    </fieldset>
  )
}

export default FormFieldset
