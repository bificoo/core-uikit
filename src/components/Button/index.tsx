import React from "react"
import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Button.module.scss"

const variant = tuple("primary", "secondary", "link")
type ButtonVariant = typeof variant[number] // union type

export interface IButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * 按鈕類型
   * @default 'button'
   */
  as?: "a" | "button"
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: ButtonVariant
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

const Button: React.FC<IButtonProps> = ({
  as = "button",
  variant = "primary",
  block = false,
  className,
  children,
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

export default Button
