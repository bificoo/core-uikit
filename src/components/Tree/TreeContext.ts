import React from "react"

export type TreeContextProps = {
  activeKey?: string
  setActiveKey: (key: string) => void
  levelMap?: { [key: string]: { level?: number; path?: string[] } }
}

const TreeContext = React.createContext<TreeContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { TreeContext }
export default TreeContext
