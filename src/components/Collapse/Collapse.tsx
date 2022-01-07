import { useState } from "react"
import CollapseContext from "./CollapseContext"
import { WithComponent } from "types/common"

export type CollapseProps = {
  defaultExpanded?: boolean
} & WithComponent

const Collapse = (props: CollapseProps) => {
  const [expanded, setExpended] = useState(props.defaultExpanded)
  return (
    <CollapseContext.Provider
      value={{
        expanded: expanded || false,
        setExpended: expanded => {
          setExpended(expanded)
        },
      }}>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </CollapseContext.Provider>
  )
}

export default Collapse
