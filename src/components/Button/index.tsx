import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Button.module.scss"
import { CommonComponentWithAs } from "types"
export const ButtonVariant = tuple("primary", "secondary", "link")
type TButtonVariant = typeof ButtonVariant[number] // union type

export interface ButtonProps extends CommonComponentWithAs<JSXProps.ButtonElement, ButtonProps> {
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
  as = "button",
  variant = "primary",
  block = false,
  className,
  children = "Click",
  ...props
}: ButtonProps): JSX.Element => {
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
