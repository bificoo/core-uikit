import React, { useState, useMemo, useEffect } from "react"
import TreeContext from "../TreeContext"

export type TreeProps = {
  defaultActiveKey?: string
  onClick: (nodes?: string[]) => void
} & ReactProps.WithChildren

const Tree = (props: TreeProps) => {
  const [eventKey, setEventKey] = useState(props.defaultActiveKey)
  const levelMap = useMemo(() => {
    const target: { [key: string]: { level?: number; nodes?: string[] } } = {}
    const saveLevel = (
      props: {
        children?: React.ReactElement | React.ReactElement[] | React.ReactNode
        eventKey?: string
      },
      level: number,
      nodes: string[],
    ) => {
      if (props.children) {
        React.Children.forEach(props.children, child => {
          if (React.isValidElement(child)) {
            target[child.props.eventKey] = {
              level: level,
              nodes: [...nodes, child.props.eventKey],
            }
            saveLevel(child.props, level + 1, [...nodes, child.props.eventKey])
          }
        })
      }
      return level
    }

    saveLevel(props, 0, [])
    return target
  }, [props.children])

  useEffect(() => {
    eventKey && props.onClick(levelMap?.[eventKey]?.nodes)
  }, [eventKey])

  return (
    <TreeContext.Provider
      value={{
        levelMap: levelMap,
        activeKey: eventKey,
        setActiveKey: eventKey => {
          setEventKey(eventKey)
        },
      }}>
      {props.children}
    </TreeContext.Provider>
  )
}

export default Tree
