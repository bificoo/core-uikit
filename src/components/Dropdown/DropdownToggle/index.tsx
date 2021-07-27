import { forwardRef } from "react"

export type DropdownToggleProps = {
  onClick?: React.MouseEventHandler<HTMLElement>
} & ReactProps.Component

export type Ref = HTMLDivElement

const DropdownToggle = forwardRef<Ref, DropdownToggleProps>((props: DropdownToggleProps, ref) => {
  return (
    <div className={props.className} onClick={props.onClick} ref={ref}>
      {props.children}
    </div>
  )
})

DropdownToggle.displayName = "DropdownToggle"

export default DropdownToggle
