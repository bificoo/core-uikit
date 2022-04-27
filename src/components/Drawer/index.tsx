import cx from "classnames"
import styled from "./Drawer.module.scss"
import { WithComponent } from "types/common"

export type DrawerProps = {
  open: boolean
  onClose?: () => void
  size?: string | number
} & WithComponent

const Drawer = ({
  open = true,
  size = 250,
  className,
  onClose,
  children,
  style,
  ...props
}: DrawerProps) => {
  return (
    <div className={styled.wrapper} {...props}>
      <input
        type="checkbox"
        className={styled.checkbox}
        onChange={onClose}
        checked={open}
        id="check"
      />
      <label className={styled.overlay} htmlFor="check" />
      <div
        className={cx(styled.container, className)}
        style={{ width: typeof size === "number" ? `${size}px` : size, ...style }}>
        {children}
      </div>
    </div>
  )
}

export default Drawer
