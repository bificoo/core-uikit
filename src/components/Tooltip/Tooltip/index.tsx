import React, { useMemo } from "react"
import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"
import TooltipToggle from "../TooltipToggle"
import TooltipBody from "../TooltipBody"
import "./Tooltip.module.scss"

export type TooltipProps = PopupProps

const Tooltip = ({
  on = ["hover"],
  position = "bottom center",
  arrow = false,
  offsetX = 8,
  offsetY = 0,
  ...props
}: TooltipProps) => {
  const tooltip = useMemo(() => {
    let triggerElement = <div />
    let bodyElement = null
    let bodyStyle = {}
    React.Children.forEach(props.children, child => {
      if (!React.isValidElement(child)) return
      if (child.type === TooltipToggle) {
        triggerElement = child
      } else if (child.type === TooltipBody) {
        bodyElement = child
        bodyStyle = child.props.style || {}
      }
    })
    return {
      trigger: triggerElement,
      body: bodyElement,
      bodyStyle: bodyStyle,
    }
  }, [props.children])

  return (
    <Popup
      className="core-tooltip"
      trigger={<span>{tooltip.trigger}</span>}
      on={on}
      position={position}
      closeOnDocumentClick
      contentStyle={tooltip.bodyStyle}
      arrow={arrow}
      offsetX={offsetX}
      offsetY={offsetY}>
      <span>{tooltip.body}</span>
    </Popup>
  )
}

export default Tooltip
