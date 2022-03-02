import React from "react"
import { forwardRef } from "react"
import { WithComponent } from "types/common"

export type DropdownToggleProps = {
  open?: boolean
  /**
   * Callback when click.
   */
  onClick?: React.MouseEventHandler<HTMLElement>
} & WithComponent

export type Ref = HTMLDivElement

const DropdownToggle = forwardRef<Ref, DropdownToggleProps>(function DropdownToggle(
  props: DropdownToggleProps,
  ref,
) {
  return (
    <div className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </div>
  )
})

export default DropdownToggle
