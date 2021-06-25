import cx from "classnames"
import { forwardRef } from "react"

export type DropdownMenuProps = {
  className?: string
  style: { [key: string]: React.CSSProperties }
  eventKey?: string
  attributes?: { [key: string]: { [key: string]: string } | undefined }
  children?: React.ReactNode
}

export type Ref = HTMLDivElement

const DropdownMenu = forwardRef<Ref, DropdownMenuProps>(
  ({ className, style, attributes, children }, ref) => {
    return (
      <div className={cx(style.wrapper, className)} style={style} ref={ref} {...attributes}>
        {children}
      </div>
    )
  },
)

DropdownMenu.displayName = "DropdownMenu"

export default DropdownMenu
