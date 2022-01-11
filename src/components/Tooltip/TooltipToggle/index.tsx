import React from "react"
import { forwardRef } from "react"
import { WithComponent } from "types/common"

export type TooltipToggleProps = {
  /**
   * A callback triggered whenever the tooltip is display
   */
  onClick?: React.MouseEventHandler<HTMLElement>
} & WithComponent
export type Ref = HTMLDivElement

const TooltipToggle = forwardRef<Ref, TooltipToggleProps>(function TooltipToggle(
  props: TooltipToggleProps,
  ref,
) {
  return (
    <span className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </span>
  )
})

export default TooltipToggle
