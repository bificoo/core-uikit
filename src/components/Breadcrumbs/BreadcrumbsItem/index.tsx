import cx from "classnames"
import styled from "./BreadcrumbsItem.module.scss"
import { WithChildren } from "types/common"

export type BreadcrumbsItemProps = {
  /**
   * Redirect url of breadcrumbs item
   */
  href?: string
} & WithChildren

const BreadcrumbsItem = ({ href, children }: BreadcrumbsItemProps) => {
  return (
    <li className={styled.wrapper}>
      <a className={cx(styled.text, { [styled.active]: !href })} href={href}>
        {children}
      </a>
    </li>
  )
}

export default BreadcrumbsItem
