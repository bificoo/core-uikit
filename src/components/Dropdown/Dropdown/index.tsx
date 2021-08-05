import React, { useMemo, useRef } from "react"
import cx from "classnames"
import Popup from "reactjs-popup"
import { PopupActions } from "reactjs-popup/dist/types"
import DropdownContext from "../DropdownContext"
import DropdownToggle from "../DropdownToggle"
import DropdownMenu from "../DropdownMenu"
import styled from "./Dropdown.module.scss"

export type DropdownProps = {
  style?: React.CSSProperties
} & ReactProps.Component

const Dropdown = ({ ...props }: DropdownProps) => {
  const activeKey = useRef<ReactProps.EventKey>("")
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
        menuElement = React.cloneElement(child, { activeKey: activeKey })
      }
    })
    return {
      trigger: triggerElement,
      menu: menuElement,
    }
  }, [props.children])

  const handleClickItem = (eventKey?: ReactProps.EventKey) => {
    if (!eventKey) return
    activeKey.current = eventKey
    popupRef.current?.close()
  }

  console.log(activeKey.current)
  return (
    <DropdownContext.Provider
      value={{ activeKey: activeKey.current, setActiveKey: handleClickItem }}>
      <div className={cx(styled.wrapper, props.className)} style={props.style}>
        <Popup
          ref={popupRef}
          trigger={open => dropdown.trigger && React.cloneElement(dropdown.trigger, { open })}
          position="bottom center"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
          contentStyle={{
            width: "100px",
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
