import React, { useState } from "react"
import cx from "classnames"
import Tab from "./Tab"
import style from "./Tabs.module.scss"
import TabsContext from "./TabsContext"

export type TabsProps = {
  defaultActiveKey: string | number
} & ReactProps.Component

const Tabs = ({ ...props }: TabsProps): JSX.Element => {
  const [activeKey, setActiveKey] = useState<string | number>(props.defaultActiveKey)

  return (
    <TabsContext.Provider value={{ activeKey, setActiveKey }}>
      <div className={cx(style.wrapper, props.className)}>
        <nav className={style["nav-tabs"]}>
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
        <div className={style["tab-content"]}>
          {React.Children.map(props.children, child => {
            if (!React.isValidElement(child)) return

            if (activeKey === child.props.eventKey) {
              return React.cloneElement(<>{child.props.children}</>)
            }
          })}
        </div>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab

export default Tabs
