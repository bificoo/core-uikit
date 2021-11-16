import { useState } from "react"
import CollapseContext from "./CollapseContext"
export type CollapseProps = ReactProps.Component & {
  defaultExpanded?: boolean
}

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
      <div>{props.children}</div>
    </CollapseContext.Provider>
  )
}

export default Collapse
