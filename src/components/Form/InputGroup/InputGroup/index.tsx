import { useContext } from "react"
import FormContext from "components/Form/FormContext"
import styled from "./InputGroup.module.scss"
import cx from "classnames"

export type InputGroupProps = ReactProps.Component

const InputGroup = (props: InputGroupProps) => {
  const { attributes } = useContext(FormContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        {
          [styled.entered]: attributes?.entered,
          [styled.disabled]: attributes?.disabled,
          [styled["read-only"]]: attributes?.readOnly,
          [styled["is-valid"]]: attributes?.isValid,
          [styled["is-invalid"]]: attributes?.isInvalid,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default InputGroup
