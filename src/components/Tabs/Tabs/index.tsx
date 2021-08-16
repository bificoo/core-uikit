import React, { useReducer, useRef, useMemo } from "react"
import cx from "classnames"
import Tab from "../Tab"
import styled from "./Tabs.module.scss"
import TabsContext from "../TabsContext"

export type TabsProps = {
  defaultActiveKey: ReactProps.EventKey
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.Component

const Tabs = ({ ...props }: TabsProps): JSX.Element => {
  const activeKey = useRef<ReactProps.EventKey>(props.defaultActiveKey)
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const handleClickTab = (eventKey?: ReactProps.EventKey) => {
    if (!eventKey) return
    activeKey.current = eventKey
    forceUpdate()
  }

  const hasChild = useMemo(() => {
    let has = false
    React.Children.forEach(props.children, child => {
      if (React.isValidElement(child) && React.isValidElement(child.props.children)) has = true
    })
    return has
  }, [props.children])

  return (
    <TabsContext.Provider value={{ activeKey: activeKey.current, setActiveKey: handleClickTab }}>
      <div
        className={cx(styled.wrapper, props.className)}
        onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
          props.onSelect && props.onSelect(e, { eventKey: activeKey.current })
        }>
        <nav className={styled["nav-tabs"]}>
          {React.Children.map(props.children, child => {
            if (!React.isValidElement(child)) return
            return (
              <Tab
                className={child.props.className}
                title={child.props.title}
                eventKey={child.props.eventKey}
              />
            )
          })}
        </nav>
        {hasChild && (
          <div className={styled["tab-content"]}>
            {React.Children.map(props.children, child => {
              if (!React.isValidElement(child)) return

              if (activeKey.current === child.props.eventKey) {
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
