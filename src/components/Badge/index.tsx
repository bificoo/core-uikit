import cx from "classnames"
import styled from "./Badge.module.scss"

export type BadgeProps = ReactProps.Component & {
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
}

const Badge = ({
  variant = "primary",
  pill = false,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cx(styled.wrapper, styled[variant], { [styled.pill]: pill }, className)}
      {...props}>
      {children}
    </span>
  )
}

export default Badge
