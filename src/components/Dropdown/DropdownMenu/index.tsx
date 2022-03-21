import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"
import React, { forwardRef } from "react"
import DropdownItem from '../DropdownItem'
import DropdownHeader from '../DropdownHeader'
import DropdownFooter from '../DropdownFooter'
import { FixedSizeList } from "react-window"

export type DropdownMenuProps = {
  /**
   * Height of the dropdown item.
   */
  rowHeight?: number
} & WithComponent

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Dropdown(props: DropdownMenuProps, ref) {
  const list: React.ReactElement[] = []

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
        {list.length >= 0 && props.rowHeight ? (
          <FixedSizeList
            className={styled.List}
            height={props.rowHeight * list.length > 224 ? 224 : props.rowHeight * list.length}
            itemCount={list.length}
            itemSize={props.rowHeight}
            width="100%"
          >
            {({ index, style }) => (
              <div style={style}>
                {React.Children.map(props.children, (child, childIndex) => {
                  if (!React.isValidElement(child)) return
                  if (child.type === DropdownItem && childIndex === index) return child
                })}
              </div>
            )}
          </FixedSizeList>
        ) : props.children}
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
