import cx from "classnames"
import Icon from "components/Icon"
import styled from "./BreadcrumbsItem.module.scss"
import { WithChildren } from "types/common"

export type BreadcrumbsItemProps = {
  /**
   * Redirect url of breadcrumbs item
   */
  href?: string
  text: string
  isNode?: boolean
} & WithChildren

const BreadcrumbsItem = ({ href, text, children, isNode }: BreadcrumbsItemProps) => {
  return (
    <li className={styled.wrapper}>
      <a
        className={cx(styled.text, { [styled.active]: !href })}
        href={href}>
        {children}
      </a>
      {isNode && <Icon.Arrow direction="right" className={styled.icon} />}
    </li>
  )
}

export default BreadcrumbsItem
