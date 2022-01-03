import cx from "classnames"
import styled from "./Badge.module.scss"

export type BadgeProps = {
  /**
   * Specify the type of the
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "important"
  /**
   * Specify if the is circle 
   * @default false
   */
  pill?: boolean
} & {
  /**
   * Provide content to be rendered inside of a
   */
  children?: React.ReactNode
} & {
  /**
   * Provide a custom className that is applied to the containing
   */
  className?: string
}

export const Badge = ({
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