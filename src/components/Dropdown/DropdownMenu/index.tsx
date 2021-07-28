import React from "react"
import cx from "classnames"
import styled from "./Menu.module.scss"

export type DropdownMenuProps = {
  style?: { [key: string]: React.CSSProperties }
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.Component

const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}

DropdownMenu.displayName = "DropdownMenu"

export default DropdownMenu
