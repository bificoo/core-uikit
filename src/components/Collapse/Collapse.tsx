import { useState } from "react"
import CollapseContext from "./CollapseContext"
import { WithComponent } from "types/common"

export type CollapseProps = {
  /**
   * Specify if the is expanded
   */
  defaultExpanded?: boolean
} & WithComponent

const Collapse = ({ defaultExpanded = false, ...props }: CollapseProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded)
  return (
    <CollapseContext.Provider
      value={{
        expanded: expanded || false,
        setExpanded: expanded => {
          setExpanded(expanded)
        },
      }}>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </CollapseContext.Provider>
  )
}

export default Collapse
