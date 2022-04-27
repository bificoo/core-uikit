import React, { useMemo } from "react"
import Popup from "reactjs-popup"
import { PopupProps } from "reactjs-popup/dist/types"
import TooltipToggle from "../TooltipToggle"
import TooltipBody from "../TooltipBody"
import "./Tooltip.module.scss"
import { WithChildren } from "types/common"

export type TooltipProps = {
  on?: PopupProps["on"]
  position?: PopupProps["position"]
} & WithChildren

const Tooltip = ({ on = "hover", position = "bottom center", ...props }: TooltipProps) => {
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
      arrow={true}
      arrowStyle={{ display: "none" }}>
      <span>{tooltip.body}</span>
    </Popup>
  )
}

export default Tooltip
