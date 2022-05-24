import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"
import React, { forwardRef, useMemo } from "react"
import DropdownItem from "../DropdownItem"
import DropdownBody from "../DropdownBody"
import DropdownHeader from "../DropdownHeader"
import DropdownFooter from "../DropdownFooter"
export type DropdownMenuProps = WithComponent

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Dropdown(
  props: DropdownMenuProps,
  ref,
) {
  const menu = useMemo(() => {
    const list: React.ReactElement[] = []
    let headerElement = null
    let bodyElement = null
    let footerElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === DropdownHeader) {
        headerElement = child
      }
      if (child.type === DropdownBody) {
        bodyElement = child
      }
      if (child.type === DropdownItem) {
        list.push(child)
      }
      if (child.type === DropdownFooter) {
        footerElement = child
      }
    })
    return {
      header: headerElement,
      body: bodyElement,
      list,
      footer: footerElement,
    }
  }, [props.children])

  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style} ref={ref}>
      {menu.header}
      {menu.body}
      {menu.list.length > 0 && <div className={styled.list}>{menu.list}</div>}
      {menu.footer}
    </div>
  )
})

export default DropdownMenu
