import Icon from "components/Icon"
import CollapseContext from "../CollapseContext"
import styled from "./CollapseHeader.module.scss"
import { useContext } from "react"
import cx from "classnames"
import { WithComponent } from "types/common"

export type CollapseHeaderProps = WithComponent

const CollapseHeader = (props: CollapseHeaderProps) => {
  const { expanded, setExpended } = useContext(CollapseContext)
  return (
    <header
      className={cx(props.className, styled.wrapper)}
      onClick={() => setExpended(!expanded)}
      style={props.style}>
      {props.children}{" "}
      <Icon.Arrow direction={!expanded ? "up" : "down"} style={{ marginLeft: "4px" }} />
    </header>
  )
}

export default CollapseHeader
