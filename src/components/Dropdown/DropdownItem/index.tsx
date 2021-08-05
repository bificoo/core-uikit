import React, { useContext } from "react"
import cx from "classnames"
import styled from "./Item.module.scss"
import DropdownContext from "../DropdownContext"

export type DropdownItemProps = {
  eventKey: ReactProps.EventKey
} & ReactProps.Component

const DropdownItem = ({ ...props }: DropdownItemProps) => {
  const { activeKey, setActiveKey } = useContext(DropdownContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        { [styled.active]: props.eventKey === activeKey },
        props.className,
      )}
      onClick={() => setActiveKey(props.eventKey)}>
      {props.children}
    </div>
  )
}

export default DropdownItem
