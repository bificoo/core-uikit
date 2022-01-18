import React from "react"

export type TreeContextProps = {
  activeKey?: string[]
  setActiveKey: (activeKey: string, nodes: string[]) => void
}

const TreeContext = React.createContext<TreeContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { TreeContext }
export default TreeContext
