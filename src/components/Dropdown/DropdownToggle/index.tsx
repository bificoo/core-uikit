import { forwardRef } from "react"

export type DropdownToggleProps = {
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

export type Ref = HTMLDivElement

const DropdownToggle = forwardRef<Ref, DropdownToggleProps>(
  ({ className, children, onClick }, ref) => {
    return (
      <div className={className} onClick={onClick} ref={ref}>
        {children}
      </div>
    )
  },
)

DropdownToggle.displayName = "DropdownToggle"

export default DropdownToggle
