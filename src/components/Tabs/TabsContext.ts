import React from "react"

export type TabsContextProps = {
  activeKey?: string | number
  setActiveKey: (eventKey: string | number) => void
}

const TabsContext = React.createContext<TabsContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export default TabsContext
