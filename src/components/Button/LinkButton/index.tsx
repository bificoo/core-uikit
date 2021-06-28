import cx from "classnames"
import styled from "./LinkButton.module.scss"

export type LinkButtonProps = {
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: "primary"
} & JSXProps.AElement

const Button = ({
  variant = "primary",
  className,
  children = "Click",
  ...props
}: LinkButtonProps) => {
  return (
    <a className={cx(styled.wrapper, styled[variant], className)} {...props}>
      {children}
    </a>
  )
}

export default Button
