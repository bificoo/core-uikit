import React from "react"
import cx from "classnames"
import styled from "./Menu.module.scss"

export type DropdownMenuProps = {
  style?: React.CSSProperties
  activeKey?: { current: ReactProps.EventKey }
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: { current: ReactProps.EventKey } },
  ) => void
} & ReactProps.Component

const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <div
      className={cx(styled.wrapper, props.className)}
      style={props.style}
      onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
        props.onSelect && props.onSelect(e, { eventKey: props.activeKey })
      }}>
      {props.children}
    </div>
  )
}

DropdownMenu.displayName = "DropdownMenu"

export default DropdownMenu
