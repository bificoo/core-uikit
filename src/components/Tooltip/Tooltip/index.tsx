import React, { useMemo } from "react"
import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"
import TooltipToggle from "../TooltipToggle"
import TooltipBody from "../TooltipBody"
import cx from "classnames"
import styled from "./Tooltip.module.scss"

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
      <Popup
        className="core-tooltip"
        trigger={<span>{tooltip.trigger}</span>}
        on={on}
        position={position}
        closeOnDocumentClick
        arrow={arrow}>
        <span>{tooltip.body}</span>
      </Popup>
    </div>
  )
}

export default Tooltip
