import cx from "classnames"
import styled from "./FormRadio.module.scss"
import { WithChildren, WithClassName } from "types/common"

export type FormRadioProps = {
  /**
   * If true, the checkbox will be inline style.
   */
  inline?: boolean
} & WithClassName &
  WithChildren &
  Omit<JSX.IntrinsicElements["input"], "type">

const FormRadio = ({ children, inline, ...props }: FormRadioProps) => {
  return (
    <div
      className={cx(
        "component-radio",
        styled.wrapper,
        { [styled.inline]: inline },
        props.className,
      )}>
      <label className={styled.label}>
        <input type="radio" {...props} />
        <span className={styled.content}>{children}</span>
      </label>
    </div>
  )
}

export default FormRadio
