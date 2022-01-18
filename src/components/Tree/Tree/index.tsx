import React, { useState, useMemo, useEffect } from "react"
import TreeContext from "../TreeContext"

export type TreeProps = {
  defaultActiveKey?: string[]
  onClick: (nodes?: string[]) => void
} & ReactProps.WithChildren

const Tree = (props: TreeProps) => {
  const [eventKey, setEventKey] = useState(props.defaultActiveKey)

  const customChildren: React.ReactNode[] = []
  React.Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      customChildren.push(
        React.cloneElement(child, {
          ...child.props,
          nodes: [child.props.eventKey], 
          key: index,
        }),
      )
    }
  })

  useEffect(() => {
    eventKey && props.onClick(eventKey)
  }, [eventKey, props.onClick])

  return (
    <TreeContext.Provider
      value={{
        activeKey: eventKey,
        setActiveKey: eventKey => {
          setEventKey(eventKey)
        },
      }}>
      {customChildren}
    </TreeContext.Provider>
  )
}

export default Tree
