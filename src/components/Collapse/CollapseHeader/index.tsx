import Icon from "components/Icon/index"
import CollapseContext from "../CollapseContext"
import styled from "./CollapseHeader.module.scss"
import { useContext } from "react"
import cx from "classnames"
import { WithComponent } from "types/common"

export type CollapseHeaderProps = WithComponent

const CollapseHeader = (props: CollapseHeaderProps) => {
  const { expanded, setExpanded } = useContext(CollapseContext)
  return (
    <header
      className={cx(props.className, styled.wrapper)}
      onClick={() => setExpanded(!expanded)}
      style={props.style}>
      {props.children}{" "}
      <Icon name={expanded ? "arrow-up" : "arrow-down"} style={{ marginLeft: "4px" }} />
    </header>
  )
}

export default CollapseHeader
