import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Button.module.scss"
export const ButtonVariant = tuple("primary", "secondary", "important")
type TButtonVariant = typeof ButtonVariant[number]

export interface ButtonProps extends JSXProps.ButtonElement {
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
}

const Button = ({
  variant = "primary",
  block = false,
  className,
  children = "Click",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cx(style.wrapper, style[variant], { [style.block]: block }, className)}
      {...props}>
      {children}
    </button>
  )
}

export default Button
