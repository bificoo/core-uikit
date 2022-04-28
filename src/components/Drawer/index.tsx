import cx from "classnames"
import styled from "./Drawer.module.scss"
import { WithComponent } from "types/common"
import { createPortal } from "react-dom"

export type DrawerProps = {
  /**
   * Should the drawer appear on screen or not
   */
  open: boolean
  /**
   * A callback function whenever the drawer closed.
   */
  onClose?: () => void
  /**
   * Allows the drawer container custom width
   */
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
  const randomId = Math.random().toString(36).substring(2, 7)
  return createPortal(
    <div className={cx(styled.wrapper, className)} style={style} {...props}>
      <input
        type="checkbox"
        className={styled.checkbox}
        onChange={onClose}
        checked={open}
        id={`check${randomId}`}
      />
      <label className={styled.overlay} htmlFor={`check${randomId}`} />
      <div
        className={styled.container}
        style={{ width: typeof size === "number" ? `${size}px` : size }}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Drawer
