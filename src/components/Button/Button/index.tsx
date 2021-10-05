import React, { useContext } from "react"
import cx from "classnames"
import styled from "./Button.module.scss"
import ButtonContext from "../ButtonContext"

export type ButtonProps = {
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "important"
  /**
   * 按鈕滿版
   * @default false
   */
  block?: boolean
  /**
   * ButtonGroup使用
   */
  isSelected?: boolean
  eventKey?: ReactProps.EventKey
} & JSXProps.ButtonElement

const Button = ({
  variant = "primary",
  block = false,
  className,
  children = "Click",
  eventKey,
  onClick,
  ...props
}: ButtonProps) => {
  const { activeKey, setActiveKey } = useContext(ButtonContext)
  return (
    <button
      className={cx(
        styled.wrapper,
        styled[variant],
        { [styled.block]: block },
        { [styled.selected]: eventKey && eventKey === activeKey },
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
