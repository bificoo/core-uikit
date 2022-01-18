import React from "react"

export type CollapseContextProps = {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
}

const CollapseContext = React.createContext<CollapseContextProps>({
  expanded: false,
  setExpanded: () => {
    //
  },
})

export { CollapseContext }
export default CollapseContext
