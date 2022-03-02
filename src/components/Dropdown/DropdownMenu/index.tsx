import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"
import React, {forwardRef} from "react"
import DropdownItem from '../DropdownItem'
import DropdownHeader from '../DropdownHeader'
import DropdownFooter from '../DropdownFooter'

export type DropdownMenuProps = WithComponent

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Dropdown(props: DropdownMenuProps, ref) {
  let list: React.ReactElement[] = []

  React.Children.map(props.children, child => {
    if (!React.isValidElement(child)) return
    if (child.type === DropdownItem) {
      list.push(child)
    }
  })

  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style} ref={ref}>
      {React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return
        if (child.type === DropdownHeader) return child
        return null
      })}
      <div className={styled.list}>
        {list}
      </div>
      {React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return
        if (child.type === DropdownFooter) return child
        return null
      })}
    </div>
  )
})

export default DropdownMenu
