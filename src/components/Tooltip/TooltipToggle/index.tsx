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
    <span className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </span>
  )
})

export default TooltipToggle
