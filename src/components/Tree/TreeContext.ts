import React from "react"
import { TreeProps } from "./Tree/index"

const TreeContext = React.createContext<TreeProps>({
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
