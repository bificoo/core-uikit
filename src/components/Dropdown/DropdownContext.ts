import React from "react"
import { EventKey } from "types/common"

export type DropdownContextProps = {
  activeKey?: EventKey
  setActiveKey: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: EventKey },
  ) => void
}

const DropdownContext = React.createContext<DropdownContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { DropdownContext }
export default DropdownContext
