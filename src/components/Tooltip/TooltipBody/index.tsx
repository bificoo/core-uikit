import styled from "./TooltipBody.module.scss"

const TooltipBody = (props: ReactProps.WithChildren) => {
  return <div className={styled.wrapper}>{props.children}</div>
}

export default TooltipBody
