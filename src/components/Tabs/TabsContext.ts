import React from "react"

export type TabsContextProps = {
  activeKey?: ReactProps.EventKey
  setActiveKey: (eventKey: ReactProps.EventKey) => void
}

const TabsContext = React.createContext<TabsContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export default TabsContext
