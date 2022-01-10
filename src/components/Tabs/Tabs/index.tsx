import React, { useState, useMemo, useEffect } from "react"
import cx from "classnames"
import styled from "./Tabs.module.scss"
import TabsContext from "../TabsContext"
import usePrevious from "hooks/usePrevious"
import { WithComponent, EventKey } from "types/common"

export type TabsProps = {
  /**
   * The default tabs active key.
   */
  defaultActiveKey: EventKey
  /**
    * The current active tab index
    */
  activeKey?: EventKey
  /**
   * For tabs customization extra content.
   */
  extraContent?: JSX.Element
  /**
   * Callback fired when selected tab changed.
   */
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: EventKey },
  ) => void
} & WithComponent

const Tabs = ({ ...props }: TabsProps): JSX.Element => {
  const [activeKey, setActiveKey] = useState(props.defaultActiveKey)
  const prevActiveKey = usePrevious(activeKey)

  const handleClickTab = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: EventKey },
  ) => {
    if (!eventKey) return
    setActiveKey(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
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
  }, [activeKey, prevActiveKey, props.activeKey])

  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey: handleClickTab }}>
      <div className={cx(styled.wrapper, props.className)} style={props.style}>
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
