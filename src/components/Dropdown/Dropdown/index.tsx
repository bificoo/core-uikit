import React, { useMemo, useRef, useState } from "react"
import cx from "classnames"
import Popup from "reactjs-popup"
import { PopupActions, PopupPosition, PopupProps } from "reactjs-popup/dist/types"
import DropdownContext from "../DropdownContext"
import DropdownToggle from "../DropdownToggle"
import DropdownMenu from "../DropdownMenu"
import styled from "./Dropdown.module.scss"

export type DropdownSelectEventProps = { eventKey?: ReactProps.EventKey }
export type DropdownProps = {
  defaultActiveKey?: ReactProps.EventKey
  position?: PopupPosition[] // TODO: remove
  keepTooltipInside?: PopupProps["keepTooltipInside"]
  style?: React.CSSProperties
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: DropdownSelectEventProps,
  ) => void
} & ReactProps.Component

const Dropdown = ({ position = ["bottom center", "top center"], ...props }: DropdownProps) => {
  const [eventKey, setEventKay] = useState(props.defaultActiveKey)
  const popupRef = useRef<PopupActions | null>(null)

  const dropdown = useMemo(() => {
    let triggerElement = <div />
    let menuElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === DropdownToggle) {
        triggerElement = child
      }
      if (child.type === DropdownMenu) {
        menuElement = child
      }
    })
    return {
      trigger: triggerElement,
      menu: menuElement,
    }
  }, [props.children])

  const handleClickItem = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => {
    if (!eventKey) return
    setEventKay(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
    popupRef.current?.close()
  }

  return (
    <DropdownContext.Provider value={{ activeKey: eventKey, setActiveKey: handleClickItem }}>
      <div className={cx(styled.wrapper, props.className)} style={props.style}>
        <Popup
          ref={popupRef}
          className="dropdown"
          trigger={open => dropdown.trigger && React.cloneElement(dropdown.trigger, { open })}
          position={position}
          // keepTooltipInside
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
          contentStyle={{
            border: "none",
            padding: "8px",
            boxShadow: "none",
          }}>
          {dropdown.menu}
        </Popup>
      </div>
    </DropdownContext.Provider>
  )
}

export default Dropdown
