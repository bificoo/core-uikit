import React, { useMemo, useRef } from "react"
import Popup from "reactjs-popup"
import { PopupActions, PopupProps } from "reactjs-popup/dist/types"
import cx from "classnames"
import styled from "../../Dropdown/Dropdown/Dropdown.module.scss"
import TooltipToggle from "../TooltipToggle"
import TooltipBody from "../TooltipBody"

export type TooltipProps = PopupProps

const Tooltip = ({
  on = "hover",
  position = "bottom center",
  arrow = true,
  ...props
}: TooltipProps) => {
  const tooltip = useMemo(() => {
    let triggerElement = <div />
    let bodyElement = null
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === TooltipToggle) {
        triggerElement = child
      } else if (child.type === TooltipBody) {
        bodyElement = child
      }
    })
    return {
      trigger: triggerElement,
      body: bodyElement,
    }
  }, [props.children])

  return (
    <div className={cx(styled.wrapper, props.className)}>
      <div>
        <Popup
          trigger={open => (
            <button className="button">Trigger - {open ? "Opened" : "Closed"}</button>
          )}
          on={["hover", "focus"]}
          position="right center"
          closeOnDocumentClick>
          <span> Popup content </span>
        </Popup>
      </div>
      <div>
        <Popup
          trigger={open => React.cloneElement(tooltip.trigger, { open })}
          position={position}
          on={on}
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={arrow}
          contentStyle={{
            width: "auto",
            border: "none",
            padding: "8px",
            boxShadow: "none",
          }}
          arrowStyle={{
            width: "10x",
            height: "10x",
            backgroundColor: "#172b4d",
            top: "8px",
          }}>
          {tooltip.body}
        </Popup>
      </div>
    </div>
  )
}

export default Tooltip
