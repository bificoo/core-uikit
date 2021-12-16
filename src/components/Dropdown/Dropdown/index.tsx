import React, { useMemo, useRef, useState, useLayoutEffect } from "react"
import cx from "classnames"
import Popup from "reactjs-popup"
import { PopupActions, PopupProps } from "reactjs-popup/dist/types"
import DropdownContext from "../DropdownContext"
import DropdownToggle from "../DropdownToggle"
import DropdownMenu from "../DropdownMenu"
import styled from "./Dropdown.module.scss"

export type DropdownSelectEventProps = { eventKey?: ReactProps.EventKey }
export type DropdownProps = {
  defaultActiveKey?: ReactProps.EventKey
  keepTooltipInside?: PopupProps["keepTooltipInside"]
  style?: React.CSSProperties
  disabled?: boolean
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: DropdownSelectEventProps,
  ) => void
} & ReactProps.Component

const Dropdown = ({ ...props }: DropdownProps) => {
  const [clientWidth, setClientWidth] = useState(0)
  const [eventKey, setEventKay] = useState(props.defaultActiveKey)
  const popupRef = useRef<PopupActions | null>(null)
  const triggerRef = useRef<HTMLInputElement>(null)

  const dropdown = useMemo(() => {
    let triggerElement = <div />
    let menuElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === DropdownToggle) {
        triggerElement = child
      }
      if (child.type === DropdownMenu) {
        menuElement = React.cloneElement(child, { style: { width: clientWidth } })
      }
    })

    return {
      trigger: triggerElement,
      menu: menuElement,
    }
  }, [props.children, clientWidth])

  const handleClickItem = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => {
    if (!eventKey) return
    setEventKay(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
    popupRef.current?.close()
  }

  useLayoutEffect(() => {
    setClientWidth(triggerRef.current?.clientWidth || 0)
  }, [])

  return (
    <DropdownContext.Provider value={{ activeKey: eventKey, setActiveKey: handleClickItem }}>
      <div className={cx(styled.wrapper, props.className)} style={props.style} ref={triggerRef}>
        <Popup
          ref={popupRef}
          className="dropdown"
          trigger={open => dropdown.trigger && React.cloneElement(dropdown.trigger, { open })}
          position={["bottom left"]}
          disabled={props.disabled}
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
