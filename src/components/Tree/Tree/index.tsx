import React, { useState, useMemo, useEffect } from "react"
import { WithChildren } from "types/common"
import TreeContext from "../TreeContext"

export type TreeProps = {
  children: WithChildren,
  defaultActiveKey?: string
  onClick: (targetKey: string, moreInfo: { parents: string[] }) => void
} & ReactProps.WithChildren

const Tree = ({ defaultActiveKey, onClick, children }: TreeProps) => {
  const [activeKey, setActiveKey] = useState<string[]>()

  useEffect(() => {
    const target: { [key: string]: string[] } = {}
    const findEventKey = (
      props: {
        children?: React.ReactElement | React.ReactElement[] | React.ReactNode
        eventKey?: string
      },
      nodes: string[],
    ) => {
      props.children && React.Children.forEach(props.children, child => {
        if (React.isValidElement(child)) {
          target[child.props.eventKey] = [...nodes, child.props.eventKey]
          findEventKey(child.props, [...nodes, child.props.eventKey])
          if (!child.props.children && (child.props.eventKey === defaultActiveKey)) {
            setActiveKey(target[child.props.eventKey])
          }
        }
      })
    }

    findEventKey({ children }, [])
  }, [children, defaultActiveKey])

  return (
    <TreeContext.Provider
      value={{
        activeKey,
        setActiveKey: (activeKey, parents) => {
          setActiveKey(parents)
          onClick(activeKey, { parents: parents.filter(el => el !== activeKey) })
        },
      }}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            nodes: [child.props.eventKey], 
            key: index,
          })
        }
      })}
    </TreeContext.Provider>
  )
}

export default Tree
