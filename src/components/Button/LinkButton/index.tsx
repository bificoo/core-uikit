import cx from "classnames"
import style from "./LinkButton.module.scss"
export const ButtonVariant = ["primary"] as const
type TButtonVariant = typeof ButtonVariant[number]

export interface LinkButtonProps extends JSXProps.AElement {
  /**
   * 按鈕樣式
   * @default 'primary'
   */
  variant?: TButtonVariant
}

const Button = ({
  variant = "primary",
  className,
  children = "Click",
  ...props
}: LinkButtonProps): JSX.Element => {
  return (
    <a className={cx(style.wrapper, style[variant], className)} {...props}>
      {children}
    </a>
  )
}

export default Button
