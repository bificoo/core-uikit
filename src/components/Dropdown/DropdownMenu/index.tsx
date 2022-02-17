import React, { useEffect } from "react"
import { useContext } from "react"
import DropdownContext from "../DropdownContext"
import cx from "classnames"
import styled from "./DropdownMenu.module.scss"
import { WithComponent } from "types/common"

export type DropdownMenuProps = {
  /**
   * The control of menu display.
   */
  onClose?: boolean
} & WithComponent


const DropdownMenu = (props: DropdownMenuProps) => {
  const { handlePopupClose } = useContext(DropdownContext)

  useEffect(() => {
    if (props.onClose) handlePopupClose()
  }, [props.onClose, handlePopupClose])

  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}

export default DropdownMenu
