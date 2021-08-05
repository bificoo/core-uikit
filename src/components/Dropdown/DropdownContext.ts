import React from "react"

export type DropdownContextProps = {
  activeKey?: ReactProps.EventKey
  setActiveKey: (eventKey: ReactProps.EventKey) => void
}

const DropdownContext = React.createContext<DropdownContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { DropdownContext }
export default DropdownContext
