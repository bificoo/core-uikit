import { ReactComponent as ArrowIcon } from "../DropdownArrow/arrow.svg"
import styled from "./DropdownArrow.module.scss"
import cx from "classnames"
export type DropdownArrowProps = {
  direction?: "up" | "down"
}

const DropdownArrow = ({ direction = "down" }: DropdownArrowProps) => {
  return (
    <div className={cx(styled.wrapper, styled[`direction-${direction}`])}>
      <ArrowIcon />
    </div>
  )
}

export default DropdownArrow
