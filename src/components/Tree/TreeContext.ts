import React from "react"

export type TreeContextProps = {
  activeKey?: string[]
  setActiveKey: (activeKey: string, parents: string[]) => void
}

const TreeContext = React.createContext<TreeContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { TreeContext }
export default TreeContext
