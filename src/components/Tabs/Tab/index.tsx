import { useContext } from "react"
import cx from "classnames"
import style from "../Tabs.module.scss"
import TabsContext from "../TabsContext"

export type TabProps = {
  title: string
  eventKey: string | number
} & ReactProps.Component

const Tab = ({ ...props }: TabProps) => {
  const { activeKey, setActiveKey } = useContext(TabsContext)
  return (
    <div
      className={cx(style.tab, { [style.active]: props.eventKey === activeKey }, props.className)}
      onClick={() => setActiveKey(props.eventKey)}>
      {props.title}
    </div>
  )
}

export default Tab
