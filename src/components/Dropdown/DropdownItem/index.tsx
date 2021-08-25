import React, { useContext } from "react"
import cx from "classnames"
import styled from "./DropdownItem.module.scss"
import DropdownContext from "../DropdownContext"

export type DropdownItemProps = {
  eventKey: ReactProps.EventKey
} & ReactProps.Component

const DropdownItem = ({ ...props }: DropdownItemProps) => {
  const { setActiveKey } = useContext(DropdownContext)
  return (
    <div
      className={cx(styled.wrapper, props.className)}
      onClick={e => setActiveKey(e, { eventKey: props.eventKey })}>
      {props.children}
    </div>
  )
}

export default DropdownItem
