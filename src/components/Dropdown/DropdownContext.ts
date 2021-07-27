import React from "react"

export type DropdownContextProps = {
  onClickItem: (eventKey?: ReactProps.EventKey) => void
}

const DropdownContext = React.createContext<DropdownContextProps>({
  onClickItem: () => {
    //
  },
})

export { DropdownContext }
export default DropdownContext
