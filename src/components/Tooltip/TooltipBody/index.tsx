import styled from "./TooltipBody.module.scss"

const TooltipBody = (props: ReactProps.WithChildren & ReactProps.WithStyle) => {
  return (
    <div className={styled.wrapper} style={props.style}>
      {props.children}
    </div>
  )
}

export default TooltipBody
