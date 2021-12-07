import React, { useState } from "react"
import Button from "../Button"
import styled from "./ButtonGroup.module.scss"

export type ButtonGroupProps = {
  defaultActiveKey?: ReactProps.EventKey
  onSelect?: (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => void
} & ReactProps.WithChildren

const ButtonGroup = (props: ButtonGroupProps) => {
  const [eventKey, setEventKay] = useState(props.defaultActiveKey)

  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    { eventKey }: { eventKey?: ReactProps.EventKey },
  ) => {
    if (!eventKey) return

    setEventKay(eventKey)
    props.onSelect && props.onSelect(e, { eventKey })
  }

  return (
    <div className={styled.outer}>
      {React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return
        if (child.type === Button) {
          return React.cloneElement(child, {
            ...child.props,
            variant: "secondary",
            selected: child.props.eventKey === eventKey,
            onClick: handleClick,
          })
        }
        return null
      })}
    </div>
  )
}
export default ButtonGroup
