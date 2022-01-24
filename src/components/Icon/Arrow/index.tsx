import { ReactComponent as ArrowIcon } from "../Arrow/arrow.svg"
import styled from "./Arrow.module.scss"
import cx from "classnames"
import { WithClassName , WithStyle } from "types/common"

export type IconArrowProps = {
  className?: string
  direction?: "up" | "down" | "right" | "left"
} & WithClassName & WithStyle

const Arrow = ({ className, direction = "down", style }: IconArrowProps) => {
  return (
    <div className={cx(styled.wrapper, className, styled[`direction-${direction}`])} style={style}>
      <ArrowIcon />
    </div>
  )
}

export default Arrow
