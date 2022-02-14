import React, { useContext, useState } from "react"
import Icon from "components/Icon"
import { WithChildren } from "types/common"
import styled from "./TreeCategory.module.scss"
import cx from "classnames"
import TreeContext from "../TreeContext"

export type TreeCategoryProps = {
  renderName: React.ReactNode
  /**
   * The tree category key.
   */
  eventKey: string
  /**
   * The tree category nodes.
   */
  nodes?: string[]
} & WithChildren

const TreeCategory = (props: TreeCategoryProps) => {
  const { selected, expanded, onNodeToggle } = useContext(TreeContext)
  const [, setSelfExpanded] = useState(expanded?.some(el => el === props.eventKey))


  return (
    <div className={styled.wrapper}>
      <div
        className={cx(styled.category, {
          [styled.active]: selected?.some(el => el === props.eventKey),
          [styled["first-level"]]: props.nodes?.length === 1,
        })}
        style={{ paddingLeft: `${((props.nodes?.length || 0) - 1) * 20}px` }}
        onClick={() => {
          setSelfExpanded(prev => {
            const result: string[] = expanded || []

            if (!prev) result.push(props.eventKey)
            else {
              const index = result.indexOf(props.eventKey)
              result.splice(index, 1)
            }
            onNodeToggle(result)
            return !prev
          })
        }
        }>
        <Icon.Arrow direction={expanded?.some(el => el === props.eventKey) ? "down" : "right"} />
        <div className={styled.name}>{props.renderName}</div>
      </div>
      <div className={cx(styled.content, { [styled.expanded]: expanded?.some(el => el === props.eventKey) })}>
        {React.Children.map(props.children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              nodes: props.nodes && [...props.nodes, child.props.eventKey],
              key: index,
            })
          }
        })}</div>
    </div>
  )
}

export default TreeCategory
