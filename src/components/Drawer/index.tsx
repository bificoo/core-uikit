import cx from "classnames"
import styled from "./Drawer.module.scss"
import { WithComponent } from "types/common"

export type DrawerProps = {
  open: boolean
  onClose?: () => void
  size?: number | string
} & WithComponent

const Drawer = ({
  open = true,
  size = "250px",
  className,
  onClose,
  children,
  ...props
}: DrawerProps) => {
  return (
    <div className={cx(styled.wrapper, className)} {...props}>
      <input
        type="checkbox"
        className={styled.checkbox}
        onChange={onClose}
        checked={open}
        id="check"
      />
      <label className={styled.overlay} htmlFor="check" />
      <div className={styled.container} style={{ width: size }}>
        {children}
      </div>
    </div>
  )
}

export default Drawer
