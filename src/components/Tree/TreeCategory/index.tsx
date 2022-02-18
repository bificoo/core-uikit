import React, { useContext, useEffect, useRef } from "react"
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
  const expandedRef = useRef(false)
  const nodes: string[] = props.nodes ? [...props.nodes, props.eventKey] : [props.eventKey]

  useEffect(() => {
    expandedRef.current = expanded?.some(el => el === props.eventKey)
  }, [expanded, props.eventKey])

  return (
    <div className={styled.wrapper}>
      <div
        className={cx(styled.category, {
          [styled.active]: selected?.some(el => el === props.eventKey),
          [styled["first-level"]]: nodes.length === 1,
        })}
        style={{ paddingLeft: `${(nodes.length - 1) * 20}px` }}
        onClick={() => {
          const result: string[] = [...expanded]

          if (!expandedRef.current) result.push(props.eventKey)
          else {
            const index = result.indexOf(props.eventKey)
            result.splice(index, 1)
          }
          expandedRef.current = !expandedRef.current
          onNodeToggle(result)
        }
        }>
        <Icon type={expanded?.some(el => el === props.eventKey) ? "down" : "right"} />
        <div className={styled.name}>{props.renderName}</div>
      </div>
      <div className={cx(styled.content, { [styled.expanded]: expanded?.some(el => el === props.eventKey) })}>
        {React.Children.map(props.children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props, nodes, key: index })
          }
        })}</div>
    </div>
  )
}

export default TreeCategory
