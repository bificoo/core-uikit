import { useContext } from "react"
import cx from "classnames"
import styled from "./Tab.module.scss"
import TabsContext from "../TabsContext"
import { WithComponent, EventKey } from "types/common"

export type TabProps = {
  /**
   * The tab content.
   */
  title: string
  /**
   * The tab key.
   */
  eventKey: EventKey
} & WithComponent

const Tab = (props: TabProps) => {
  const { activeKey, setActiveKey } = useContext(TabsContext)
  return (
    <div
      className={cx(
        styled.wrapper,
        { [styled.active]: props.eventKey === activeKey },
        props.className,
      )}
      onClick={e => {
        setActiveKey(e, { eventKey: props.eventKey })
      }}>
      {props.title}
    </div>
  )
}

export default Tab
