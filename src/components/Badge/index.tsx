import cx from "classnames"
import styled from "./Badge.module.scss"
import { WithComponent } from "../../types/common"

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
} & WithComponent

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