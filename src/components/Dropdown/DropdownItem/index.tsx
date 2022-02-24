import { useContext } from "react"
import cx from "classnames"
import styled from "./DropdownItem.module.scss"
import DropdownContext from "../DropdownContext"
import { WithComponent, EventKey } from "types/common"

export type DropdownItemProps = {
  /**
   * The dropdown item key.
   */
  eventKey?: EventKey
} & WithComponent

const DropdownItem = (props: DropdownItemProps) => {
  const { setActiveKey } = useContext(DropdownContext)
  return (
    <div
      className={cx(styled.wrapper, props.className)}
      onClick={e => setActiveKey(e, { eventKey: props.eventKey })}>
      {props.children}
    </div>
  )
}

export default DropdownItem
