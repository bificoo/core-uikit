import cx from "classnames"
import styled from "./Button.module.scss"

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
} & JSXProps.ButtonElement

const Button = ({
  variant = "primary",
  block = false,
  className,
  children = "Click",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(styled.wrapper, styled[variant], { [styled.block]: block }, className)}
      {...props}>
      {children}
    </button>
  )
}

export default Button
