import React, { useReducer, useState, useMemo, useEffect } from "react"
import cx from "classnames"
import styled from "./Tabs.module.scss"
import TabsContext from "../TabsContext"
import usePrevious from "hooks/usePrevious"

export type TabsProps = {
  defaultActiveKey: ReactProps.EventKey
  activeKey?: ReactProps.EventKey
  extraContent?: JSX.Element
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.Component

const Tabs = ({ ...props }: TabsProps): JSX.Element => {
  const [activeKey, setActiveKey] = useState(props.defaultActiveKey)
  const prevActiveKey = usePrevious(activeKey)

  const handleClickTab = (eventKey?: ReactProps.EventKey) => {
    if (!eventKey) return
    setActiveKey(eventKey)
  }

  const hasChild = useMemo(() => {
    let has = false
    React.Children.forEach(props.children, child => {
      if (React.isValidElement(child) && React.isValidElement(child.props.children)) has = true
    })
    return has
  }, [props.children])

  useEffect(() => {
    if (props.activeKey && prevActiveKey === activeKey && activeKey !== props.activeKey) {
      setActiveKey(props.activeKey)
    }
  }, [activeKey, props.activeKey])

  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey: handleClickTab }}>
      <div
        className={cx(styled.wrapper, props.className)}
        onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
          props.onSelect && props.onSelect(e, { eventKey: activeKey })
        }
        style={props.style}>
        <nav className={styled["nav-tabs"]}>
          {React.Children.map(props.children, child => {
            if (!React.isValidElement(child)) return
            return child
          })}
          <div className={styled["extra-content"]}>{props.extraContent}</div>
        </nav>
        {hasChild && (
          <div className={styled["tab-content"]}>
            {React.Children.map(props.children, child => {
              if (!React.isValidElement(child)) return

              if (activeKey === child.props.eventKey) {
                return child.props.children
              }
            })}
          </div>
        )}
      </div>
    </TabsContext.Provider>
  )
}

export default Tabs
