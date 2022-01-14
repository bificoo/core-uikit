import React, { useContext, useMemo, useState } from "react"
import Icon from "components/Icon"
import styled from "./TreeCategory.module.scss"
import cx from "classnames"
import TreeContext from "../TreeContext"

export type TreeCategoryProps = {
  children?: React.ReactElement | React.ReactElement[]
  renderName: React.ReactNode
  eventKey: string
} & ReactProps.WithChildren

const TreeCategory = (props: TreeCategoryProps) => {
  const { activeKey, levelMap } = useContext(TreeContext)
  const [expanded, setExpended] = useState(false)

  const target = useMemo(() => {
    const isActive = (props: TreeCategoryProps) => {
      let active = false
      React.Children.forEach(props.children, child => {
        if (React.isValidElement(child)) {
          if (isActive(child.props) || child.props.eventKey === activeKey) {
            setExpended(true)
            active = true
          }
        }
      })
      return active
    }
    return isActive(props)
  }, [activeKey])

  return (
    <div>
      <div
        className={cx(styled.category, {
          [styled.active]: target,
          [styled.bold]: levelMap?.[props.eventKey].level === 0,
        })}
        style={{ paddingLeft: `${(levelMap?.[props.eventKey]?.level || 0) * 20}px` }}
        onClick={() => setExpended(prev => !prev)}>
        <Icon.Arrow direction={!expanded ? "up" : "down"} />
        {props.renderName}
      </div>
      <div className={cx(styled.content, { [styled.expanded]: expanded })}>{props.children}</div>
    </div>
  )
}

export default TreeCategory
