import cx from "classnames"
import styled from "./DropdownBody.module.scss"
import { WithComponent } from "types/common"

const DropdownBody = (props: WithComponent) => {
  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      {props.children}
    </div>
  )
}

export default DropdownBody
