import React from "react"
import cx from "classnames"
import styled from "./Button.module.scss"

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
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    eventKey?: { eventKey?: ReactProps.EventKey },
  ) => void
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
  return (
    <button
      className={cx(
        "core-uikit-button",
        styled.wrapper,
        styled[variant],
        { [styled.block]: block },
        { [styled.selected]: selected },
        className,
      )}
      style={props.style}
      onClick={e => {
        onClick && onClick(e, { eventKey: eventKey })
      }}
      {...props}>
      {children}
    </button>
  )
}

export default Button
