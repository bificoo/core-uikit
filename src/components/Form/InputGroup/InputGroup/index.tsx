import { useContext } from "react"
import FormContext from "components/Form/FormContext"
import style from "./InputGroup.module.scss"
import cx from "classnames"

export type InputGroupProps = ReactProps.Component

const InputGroup = (props: InputGroupProps) => {
  const { attributes } = useContext(FormContext)
  return (
    <div
      className={cx(
        style.wrapper,
        {
          [style.entered]: attributes?.entered,
          [style.disabled]: attributes?.disabled,
          [style["read-only"]]: attributes?.readOnly,
          [style["is-valid"]]: attributes?.isValid,
          [style["is-invalid"]]: attributes?.isInvalid,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default InputGroup
