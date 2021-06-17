import cx from "classnames"
import style from "./LinkButton.module.scss"

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
    <a className={cx(style.wrapper, style[variant], className)} {...props}>
      {children}
    </a>
  )
}

export default Button
