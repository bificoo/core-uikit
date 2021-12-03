import React, { useState } from "react"
import styled from "./ButtonGroup.module.scss"
import ButtonContext from "../ButtonContext"

export type ButtonGroupProps = {
  defaultActiveKey?: ReactProps.EventKey
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.WithChildren

const ButtonGroup = (props: ButtonGroupProps) => {
  const [eventKey, setEventKay] = useState(props.defaultActiveKey)
  const [selectKey, setSelectKey] = useState(props.defaultActiveKey)

  const handleClickItem = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => {
    if (!eventKey) return
    setEventKay(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
    setSelectKey(eventKey)
  }

  return (
    <ButtonContext.Provider
      value={{ activeKey: eventKey, setActiveKey: handleClickItem, selectKey: selectKey }}>
      <div className={styled.outer}>{props.children}</div>
    </ButtonContext.Provider>
  )
}
export default ButtonGroup
