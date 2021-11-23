import styled from "./CollapsePanel.module.scss"
import { useContext } from "react"
import CollapseContext from "../CollapseContext"
import cx from "classnames"

export type CollapsePanelProps = ReactProps.Component

const CollapsePanel = (props: CollapsePanelProps) => {
  const { expanded } = useContext(CollapseContext)
  return (
    <div
      className={cx(props.className, styled.wrapper, {
        [styled.expanded]: expanded,
      })}
      style={props.style}>
      {props.children}
    </div>
  )
}

export default CollapsePanel
