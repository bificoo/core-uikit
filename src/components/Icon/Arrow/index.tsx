import { ReactComponent as ArrowIcon } from "../Arrow/arrow.svg"
import styled from "./Arrow.module.scss"
import cx from "classnames"

export type IconArrowProps = {
  direction?: "up" | "down"
  style?: React.CSSProperties
}

const Arrow = ({ direction = "down", style }: IconArrowProps) => {
  return (
    <div className={cx(styled.wrapper, styled[`direction-${direction}`])} style={style}>
      <ArrowIcon />
    </div>
  )
}

export default Arrow
