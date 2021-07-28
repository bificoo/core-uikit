import React from "react"
import { forwardRef } from "react"

export type TooltipToggleProps = {
  onClick?: React.MouseEventHandler<HTMLElement>
} & ReactProps.Component
export type Ref = HTMLDivElement

const TooltipToggle = forwardRef<Ref, TooltipToggleProps>(function TooltipToggle(
  props: TooltipToggleProps,
  ref,
) {
  return (
    <div className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </div>
  )
})

export default TooltipToggle
