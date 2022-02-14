import React from "react"

export type TreeContextProps = {
  selected?: string[]
  expanded: string[] // 展開的list
  onNodeToggle: (nodeIds: string[]) => void
  onNodeSelect: (nodeIds: string[]) => void
}

const TreeContext = React.createContext<TreeContextProps>({
  expanded: [],
  onNodeToggle: () => {
    // set attributes
  },
  onNodeSelect: () => {
    // set attributes
  },
})

export { TreeContext }
export default TreeContext
