import React from "react"
import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Button.module.scss"

export const ButtonVariant = tuple("primary", "secondary", "link")
type TButtonVariant = typeof ButtonVariant[number] // union type

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * 按鈕類型
   * @default 'button'
   */
  as?: "a" | "button"
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: TButtonVariant
  /**
   * 按鈕滿版
   * @default false
   */
  block?: boolean
  /** 客製化 css class */
  className?: string | { [key: string]: boolean }
  /** 按鈕內容 */
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  as = "button",
  variant = "primary",
  block = false,
  className,
  children = "Click",
  ...props
}) => {
  const Component = as

  return (
    <Component
      className={cx(style.wrapper, style[variant], { [style.block]: block }, className)}
      {...props}>
      {children}
    </Component>
  )
}

Button
export default Button
