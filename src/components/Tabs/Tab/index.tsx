import { useContext } from "react"
import cx from "classnames"
import styled from "./Tab.module.scss"
import TabsContext from "../TabsContext"

export type TabProps = {
  title: string
  eventKey: ReactProps.EventKey
} & ReactProps.Component

const Tab = ({ ...props }: TabProps) => {
  const { activeKey, setActiveKey } = useContext(TabsContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        { [styled.active]: props.eventKey === activeKey },
        props.className,
      )}
      onClick={() => setActiveKey(props.eventKey)}>
      {props.title}
    </div>
  )
}

export default Tab
