import React, { forwardRef, useMemo } from "react"
import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"
import { WithComponent } from "types/common"
import DropdownItem from "../DropdownItem"
import DropdownBody from "../DropdownBody"
import DropdownHeader from "../DropdownHeader"
import DropdownFooter from "../DropdownFooter"
import MenuContent from "./MenuContent"

export type DropdownMenuProps = {
  /**
   * Height of the dropdown item.
   */
  rowHeight?: number
  trigger?: JSX.Element
  on?: PopupProps["on"]
  position?: PopupProps["position"]
  keepTooltipInside?: PopupProps["keepTooltipInside"]
  offsetX?: PopupProps["offsetX"]
  offsetY?: PopupProps["offsetY"]
  nested?: PopupProps["nested"]
} & WithComponent

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
      if (child.type === DropdownItem || child.type === DropdownMenu) {
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
    <>
      {!props.trigger ? (
        <MenuContent ref={ref} menuContent={menu} rowHeight={props.rowHeight} />
      ) : (
        <Popup
          trigger={<span>{props.trigger}</span>}
          on={props.on}
          nested={props.nested}
          position={props.position}
          offsetX={props.offsetX}
          offsetY={props.offsetY}
          closeOnDocumentClick
          arrow={false}>
          <MenuContent menuContent={menu} rowHeight={props.rowHeight} />
        </Popup>
      )}
    </>
  )
})

export default DropdownMenu
