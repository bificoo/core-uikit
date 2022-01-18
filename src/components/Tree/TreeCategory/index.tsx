import React, { useContext, useMemo, useState } from "react"
import Icon from "components/Icon"
import styled from "./TreeCategory.module.scss"
import cx from "classnames"
import TreeContext from "../TreeContext"
import { act } from "react-dom/test-utils"

export type TreeCategoryProps = {
  children?: React.ReactElement | React.ReactElement[]
  renderName: React.ReactNode
  eventKey: string
  nodes?: string[]
} & ReactProps.WithChildren

const TreeCategory = (props: TreeCategoryProps) => {
  const { activeKey } = useContext(TreeContext)
  const [expanded, setExpanded] = useState(false)

  const customChildren: React.ReactNode[] = []
  React.Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child)) {      
      customChildren.push(
        React.cloneElement(child, {
          ...child.props,
          nodes: props.nodes && [...props.nodes, child.props.eventKey],
          key: index,
        }),
      )
    }
  })

  const active = useMemo(() => {
    return activeKey?.some(el => {
      if (el === props.eventKey) {
        setExpanded(true)
        return true
      }
      return false
    })
  }, [activeKey, props.eventKey])

  return (
    <div>
      <div
        className={cx(styled.category, {
          [styled.active]: active,
          [styled["first-level"]]: props.nodes?.length === 1,
        })}
        style={{ paddingLeft: `${((props.nodes?.length || 0) - 1) * 20}px` }}
        onClick={() => setExpanded(prev => !prev)}>
        <Icon.Arrow direction={!expanded ? "up" : "down"} />
        {props.renderName}
      </div>
      <div className={cx(styled.content, { [styled.expanded]: expanded })}>{customChildren}</div>
    </div>
  )
}

export default TreeCategory
