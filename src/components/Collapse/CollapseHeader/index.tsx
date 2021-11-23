import { ReactComponent as ChevronIcon } from "../chevron.svg"
import CollapseContext from "../CollapseContext"
import styled from "./CollapseHeader.module.scss"
import { useContext } from "react"
import cx from "classnames"

export type CollapseHeaderProps = ReactProps.Component

const CollapseHeader = (props: CollapseHeaderProps) => {
  const { expanded, setExpended } = useContext(CollapseContext)
  return (
    <header
      className={cx(props.className, styled.wrapper, { [styled.expanded]: expanded })}
      onClick={() => setExpended(!expanded)}
      style={props.style}>
      {props.children} <ChevronIcon />
    </header>
  )
}

export default CollapseHeader
