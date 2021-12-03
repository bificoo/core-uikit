import React, { useContext } from "react"
import cx from "classnames"
import styled from "./Button.module.scss"
import ButtonContext from "../ButtonContext"

export type ButtonProps = {
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "important" | "text"
  /**
   * 按鈕滿版
   * @default false
   */
  block?: boolean
  /**
   * 按鈕是否為選取的狀態
   * @default false
   */
  selected?: boolean
  /**
   * ButtonGroup使用
   */
  eventKey?: ReactProps.EventKey
} & JSXProps.ButtonElement

const Button = ({
  variant = "primary",
  selected = false,
  block = false,
  className,
  children = "Click",
  eventKey,
  onClick,
  ...props
}: ButtonProps) => {
  const { activeKey, setActiveKey, selectKey } = useContext(ButtonContext)

  return (
    <button
      className={cx(
        "core-uikit-button",
        styled.wrapper,
        styled[variant],
        { [styled.block]: block },
        { [styled.selected]: selected && selectKey === eventKey },
        { active: eventKey && eventKey === activeKey },
        className,
      )}
      onClick={e => {
        if (eventKey) {
          setActiveKey(e, { eventKey })
        } else {
          onClick && onClick(e)
        }
      }}
      {...props}>
      {children}
    </button>
  )
}

export default Button
