import React from "react"
import cx from "classnames"
import tuple from "utils/tuple"
import style from "./Badge.module.scss"

export const BadgeVariant = tuple("primary", "secondary", "link")
type TBadgeVariant = typeof BadgeVariant[number]

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * 標籤類型
   * @default 'span'
   */
  as?: "a" | "span"
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
  /** 客製化 css class */
  className?: string | { [key: string]: boolean }
  /** 按鈕內容 */
  children: React.ReactNode
}

const defaultProps = {
  pill: false,
}

const Badge = ({
  as: Component = "span",
  variant = "primary",
  pill,
  className,
  children,
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <Component
      className={cx(style.wrapper, style[variant], { [style.pill]: pill }, className)}
      {...props}>
      {children}
    </Component>
  )
}

Badge.displayName = "Badge"
Badge.defaultProps = defaultProps

export default Badge
