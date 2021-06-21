import cx from "classnames"
import style from "./Badge.module.scss"

export type BadgeProps = {
  /**
   * 標籤樣式
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "important"
  /**
   * 標籤是否圓形
   * @default false
   */
  pill?: boolean
} & JSXProps.SpanElement

const Badge = ({
  variant = "primary",
  pill = false,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cx(style.wrapper, style[variant], { [style.pill]: pill }, className)}
      {...props}>
      {children}
    </span>
  )
}

export default Badge
