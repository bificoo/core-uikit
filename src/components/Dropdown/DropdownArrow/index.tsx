import { ReactComponent as ArrowIcon } from "../DropdownArrow/arrow.svg"
import styled from "./DropdownArrow.module.scss"

const DropdownArrow = () => {
  return (
    <div className={styled.wrapper}>
      <ArrowIcon />
    </div>
  )
}

export default DropdownArrow
