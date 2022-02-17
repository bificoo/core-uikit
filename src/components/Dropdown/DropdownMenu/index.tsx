import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"

export type DropdownMenuProps = WithComponent

const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}

export default DropdownMenu
