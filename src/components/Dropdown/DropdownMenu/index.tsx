import React from "react"
import cx from "classnames"
import styled from "./DropdownMenu.module.scss"

export type DropdownMenuProps = {
  style?: React.CSSProperties
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
