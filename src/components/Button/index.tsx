import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Button.module.scss"
export const ButtonVariant = tuple("primary", "secondary", "link")
type TButtonVariant = typeof ButtonVariant[number]

export interface ButtonProps extends JSXProps.ButtonElement {
  as?: "button"
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
  as: Component = "button",
  variant = "primary",
  block = false,
  className,
  children = "Click",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <Component
      className={cx(style.wrapper, style[variant], { [style.block]: block }, className)}
      {...props}>
      {children}
    </Component>
  )
}

export default Button
