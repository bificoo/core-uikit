import React from "react"
import cx from "classnames"
import styled from "./TextButton.module.scss"
import Arrow from "components/Icon/Arrow"

export type TextButtonProps = {
  /**
   * 按鈕是否為選取的狀態
   * @default false
   */
  selected?: boolean
  variant?: "primary" | "secondary" | "important" | "text"
  onClick?: () => void
} & JSXProps.ButtonElement

const TextButton = ({
  variant = "primary",
  selected = false,
  className,
  children = "Click",
  onClick,
  ...props
}: TextButtonProps) => {
  const iconConfig = { leftIcon: false, rightIcon: false }
  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) return
    if (child.type === Arrow) {
      if (index === 0) iconConfig.leftIcon = true
      else iconConfig.rightIcon = true
    }
  })

  const customChildren: React.ReactElement[] = []
  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) {
      customChildren.push(React.cloneElement(<div>{child}</div>, { key: index }))
    } else if (child.type === Arrow) {
      customChildren.push(
        React.cloneElement(child, {
          ...child.props,
          style: index === 0 ? { marginRight: "4px" } : { marginLeft: "4px" },
        }),
      )
    } else customChildren.push(React.cloneElement(child, { key: index }))
  })

  return (
    <button
      className={cx(
        "core-uikit-button",
        styled.wrapper,
        styled[variant],
        { [styled.selected]: selected },
        className,
      )}
      style={{
        ...(iconConfig.leftIcon && { paddingLeft: "8px" }),
        ...(iconConfig.rightIcon && { paddingRight: "8px" }),
      }}
      onClick={() => {
        onClick && onClick()
      }}
      {...props}>
      {customChildren}
    </button>
  )
}

export default TextButton
