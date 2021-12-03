import React from "react"

export type ButtonContextProps = {
  activeKey?: ReactProps.EventKey
  setActiveKey: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
  selectKey?: ReactProps.EventKey
}

const ButtonContext = React.createContext<ButtonContextProps>({
  setActiveKey: () => {
    // set attributes
  },
})

export { ButtonContext }
export default ButtonContext
