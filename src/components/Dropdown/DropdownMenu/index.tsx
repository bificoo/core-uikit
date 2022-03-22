import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"
import React, { forwardRef, useRef } from "react"
import DropdownItem from "../DropdownItem"
import DropdownHeader from "../DropdownHeader"
import DropdownFooter from "../DropdownFooter"
import { FixedSizeList } from "react-window"

export type DropdownMenuProps = {
  /**
   * Height of the dropdown item.
   */
  rowHeight?: number
} & WithComponent

const getStringWidth = (val: string) => {
  let len = 0
  for (let i = 0; i < val.length; i++) {
    let length = val.charCodeAt(i)
    if (length >= 0 && length <= 128) {
      len += 1
    } else {
      len += 2
    }
  }
  return len
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  function Dropdown(props: DropdownMenuProps, ref) {
    const list: React.ReactElement[] = []
    const width = useRef(0)
    const padding = 32
    const fontSize = 14

    React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return

      if (child.type === DropdownItem) {
        list.push(child)
      }
      if (typeof child.props.children === "string") {
        const length = getStringWidth(child.props.children)
        width.current = width.current > length ? width.current : length
      }
    })

    const isRenderItem = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return
      return (
        child.type === DropdownItem ||
        child.type === DropdownHeader ||
        child.type === DropdownFooter
      )
    })?.some((el) => el)

    return (
      <div
        className={cx(styled.wrapper, props.className)}
        style={{
          ...props.style,
          ...(props.rowHeight && {
            width: (width.current / 2 + 1) * fontSize + padding,
          }),
        }}
        ref={ref}
      >
        {React.Children.map(props.children, (child) => {
          if (!React.isValidElement(child)) return
          if (child.type === DropdownHeader) return child
          return null
        })}
        <div className={styled.list}>
          {/* rowHeight值存在使用VirtualScroll，不存在一般情況 */}
          {props.rowHeight ? (
            <FixedSizeList
              height={props.rowHeight * 7}
              itemCount={list.length}
              itemSize={props.rowHeight}
              width="100%">
              {({ index, style }) => (
                <div style={style}>
                  {React.Children.map(props.children, (child, childIndex) => {
                    if (!React.isValidElement(child)) return
                    if (child.type === DropdownItem && childIndex === index) return child
                  })}
                </div>
              )}
            </FixedSizeList>
            // 一般情況有使用DropdownItem & 內部完全客製
          ) : isRenderItem ? list : props.children}
        </div>
        {React.Children.map(props.children, (child) => {
          if (!React.isValidElement(child)) return
          if (child.type === DropdownFooter) return child
          return null
        })}
      </div>
    )
  }
)

export default DropdownMenu
