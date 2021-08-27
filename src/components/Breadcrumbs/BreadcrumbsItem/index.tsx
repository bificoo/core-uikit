import cx from "classnames"
import styled from "./BreadcrumbsItem.module.scss"

export type BreadcrumbsItemProps = {
  href?: string
  text: string
}

const BreadcrumbsItem = ({ href, text }: BreadcrumbsItemProps) => {
  return (
    <li className={styled.wrapper}>
      <a
        className={cx(styled.text, {
          [styled.active]: !href,
        })}
        href={href}>
        {text}
      </a>
    </li>
  )
}

export default BreadcrumbsItem
