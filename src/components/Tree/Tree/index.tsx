import React from "react"
import { WithChildren } from "types/common"
import TreeContext from "../TreeContext"

export type TreeProps = {
  /**
   * The expanded list key.
   */
  expanded: string[]
  /**
   * The active list key.
   */
  selected?: string[]
  /**
   * Click the tree category.
   */
  onNodeToggle: (nodeIds: string[]) => void
  /**
   * Click the tree item.
   */
  onNodeSelect: (nodeIds: string[]) => void
} & WithChildren

const Tree = ({ expanded, selected, onNodeToggle, onNodeSelect, children }: TreeProps) => {
  return (
    <TreeContext.Provider
      value={{
        expanded,
        selected,
        onNodeToggle,
        onNodeSelect,
      }}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            key: index,
          })
        }
      })}
    </TreeContext.Provider>
  )
}

export default Tree
