import cx from "classnames"
import styled from "./LinkButton.module.scss"
import { WithClassName, WithChildren } from "types/common"

export type LinkButtonProps = WithClassName & WithChildren & JSX.IntrinsicElements["a"]

export const LinkButton = ({
  className,
  children = "Click",
  ...props
}: LinkButtonProps) => {
  return (
    <a className={cx(styled.wrapper, styled.primary, className)} {...props}>
      {children}
    </a>
  )
}

export default LinkButton