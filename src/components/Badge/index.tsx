import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Badge.module.scss"

export const BadgeVariant = tuple(
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
)
type TBadgeVariant = typeof BadgeVariant[number]

export interface BadgeProps extends JSXProps.SpanElement {
  /**
   * 標籤樣式
   * @default 'primary'
   */
  variant?: TBadgeVariant
  /**
   * 標籤是否圓形
   * @default false
   */
  pill?: boolean
}

const defaultProps = {
  pill: false,
}

const Badge = ({
  variant = "primary",
  pill,
  className,
  children,
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <span
      className={cx(style.wrapper, style[variant], { [style.pill]: pill }, className)}
      {...props}>
      {children}
    </span>
  )
}

Badge.displayName = "Badge"
Badge.defaultProps = defaultProps

export default Badge
