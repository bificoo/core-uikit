import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"
import React, { forwardRef, useRef, useEffect, useState } from "react"
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

const LIST_MAX_HEIGHT = 224
const ITEM_PADDING = 32
const MENU_MIN_WIDTH = 141

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Dropdown(props: DropdownMenuProps, ref) {
  const list: React.ReactElement[] = []
  const listWrapperRef = useRef<HTMLInputElement>(null)
  const [maxWidth, setMaxWidth] = useState(0)
  const [scrollOffset, setScrollOffset] = useState(0)

  React.Children.map(props.children, child => {
    if (!React.isValidElement(child)) return
    if (child.type === DropdownItem) {
      list.push(child)
    }
  })

  useEffect(() => {
    const item = listWrapperRef.current?.querySelectorAll("[class*=DropdownItem]")
    let max = 0

    item?.forEach(el => {
      const width = el.children[0]?.clientWidth
      if (width && width > max) max = width
    })
    setMaxWidth(max)
  }, [scrollOffset])

  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style} ref={ref}>
      {React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return
        if (child.type === DropdownHeader) return child
        return null
      })}
      <div className={styled.list} ref={listWrapperRef}>
        {list.length > 0 ? props.rowHeight ? (
          <FixedSizeList
            className={styled.List}
            height={props.rowHeight * list.length > LIST_MAX_HEIGHT ? LIST_MAX_HEIGHT : props.rowHeight * list.length}
            itemCount={list.length}
            itemSize={props.rowHeight}
            width={`${maxWidth - ITEM_PADDING > MENU_MIN_WIDTH ? `calc(${maxWidth}px + ${ITEM_PADDING}px)` : "100%"}`}
            onScroll={ props => { 
              if (props.scrollOffset > scrollOffset) { 
                setScrollOffset(props.scrollOffset)
              }
            }}
          >
            {({ index, style }) => (
              <div style={style}>
                {list.map((el, elIndex) => (elIndex === index) ? el : null)}
              </div>
            )}
          </FixedSizeList>
        ) : list : null}
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
