import { useContext } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import styled from "./Prepend.module.scss"
import cx from "classnames"
import { WithComponent } from "types/common"

export type PrependProps = WithComponent

const Prepend = (props: PrependProps) => {
  const { attributes } = useContext(FormGroupContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        {
          [styled.entered]: attributes?.entered,
          [styled.disabled]: attributes?.disabled,
          [styled["read-only"]]: attributes?.readOnly,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default Prepend
