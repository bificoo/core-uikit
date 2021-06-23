import React, { useContext } from "react"
import FormContext from "components/Form/FormContext"
import style from "./Append.module.scss"
import cx from "classnames"

export type AppendProps = ReactProps.Component

const Append = (props: AppendProps) => {
  const { attributes } = useContext(FormContext)
  return (
    <div
      className={cx(
        style.wrapper,
        {
          [style.entered]: attributes?.entered,
          [style.disabled]: attributes?.disabled,
          [style["read-only"]]: attributes?.readOnly,
        },
        props.className,
      )}>
      {props.children}
    </div>
  )
}

export default Append
