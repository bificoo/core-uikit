import React from "react"

export type CollapseContextProps = {
  expanded: boolean
  setExpended: (expanded: boolean) => void
}

const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
  setExpended: () => {
    //
  },
})

export { CollapseContext }
export default CollapseContext
