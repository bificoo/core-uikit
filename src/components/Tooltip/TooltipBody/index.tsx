import styled from "./TooltipBody.module.scss"
import { WithChildren, WithStyle } from "types/common"

export type TooltipBodyProps = WithChildren & WithStyle

const TooltipBody = (props: TooltipBodyProps) => {
  return (
    <div className={styled.wrapper} style={props.style}>
      {props.children}
    </div>
  )
}

TooltipBody.display = TooltipBody

export default TooltipBody
