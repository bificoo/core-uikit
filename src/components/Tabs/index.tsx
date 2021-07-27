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
            const { title, key, className } = child.props
            return <Tab className={className} title={title} key={key} />
          })}
        </nav>
        <div className={style["tab-content"]}>
          {React.Children.map(props.children, child => {
            if (!React.isValidElement(child)) return
            const { key } = child.props
            return React.cloneElement(<>{child.props.children}</>, {
              className: cx({ [style.active]: activeKey === key }),
            })
          })}
        </div>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab

export default Tabs
