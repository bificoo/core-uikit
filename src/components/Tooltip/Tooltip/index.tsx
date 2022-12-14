import React, { useMemo, useRef, forwardRef, useImperativeHandle } from "react"
import Popup from "reactjs-popup"
import { PopupActions, PopupProps } from "reactjs-popup/dist/types"
import TooltipToggle from "../TooltipToggle"
import TooltipBody from "../TooltipBody"
import "./Tooltip.module.scss"
import { WithChildren, WithComponent, WithPrefix } from "types/common"
import cx from "classnames"

export type TooltipActions = {
  /**
   * Close the menu.
   */
  close: () => void
}

export type TooltipProps = {
  on?: PopupProps["on"]
  position?: PopupProps["position"]
  keepTooltipInside?: PopupProps["keepTooltipInside"]
} & WithChildren &
  WithPrefix &
  WithComponent

const Tooltip = forwardRef<TooltipActions, TooltipProps>(function Tooltip(
  { on = "hover", position = "bottom center", keepTooltipInside = false, ...props }: TooltipProps,
  ref,
) {
  const popupRef = useRef<PopupActions | null>(null)
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

  useImperativeHandle(ref, () => ({
    close: () => popupRef.current && popupRef.current?.close(),
  }))

  return (
    <Popup
      ref={popupRef}
      className={cx("core-tooltip", props.prefix)}
      trigger={<span>{tooltip.trigger}</span>}
      keepTooltipInside={keepTooltipInside}
      on={on}
      position={position}
      closeOnDocumentClick
      contentStyle={tooltip.bodyStyle}
      arrow={true}
      arrowStyle={{ display: "none" }}>
      <span>{tooltip.body}</span>
    </Popup>
  )
})

export default Tooltip
