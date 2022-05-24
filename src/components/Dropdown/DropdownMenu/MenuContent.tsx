import React, { forwardRef } from "react"
import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"

export type MenuContentProps = {
  rowHeight?: number
  ref: React.Ref<HTMLInputElement>
  menuContent: {
    header: React.ReactNode
    body: React.ReactNode
    list: React.ReactNode[]
    footer: React.ReactNode
  }
} & WithComponent

const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(function Dropdown(
  { menuContent, ...props }: MenuContentProps,
  ref,
) {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style} ref={ref}>
      {menuContent.header}
      {menuContent.body}
      {menuContent.list.length > 0 && <div className={styled.list}>{menuContent.list}</div>}
      {menuContent.footer}
    </div>
  )
})

export default MenuContent
