import React, { useContext } from "react"
import cx from "classnames"
import styled from "./Item.module.scss"
import DropdownContext from "../DropdownContext"

export type DropdownItemProps = {
  eventKey?: ReactProps.EventKey
  active?: boolean
} & ReactProps.Component

const DropdownItem = (props: DropdownItemProps) => {
  const context = useContext(DropdownContext)
  return (
    <div
      className={cx(styled.wrapper, { [styled.active]: props.active }, props.className)}
      onClick={() => context.onClickItem(props.eventKey)}>
      {props.children}
    </div>
  )
}

export default DropdownItem
