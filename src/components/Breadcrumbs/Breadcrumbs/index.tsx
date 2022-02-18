import React from "react"
import Icon from "components/Icon/index"
import styled from "./Breadcrumbs.module.scss"
import { WithChildren } from "types/common"

export type BreadcrumbsProps = WithChildren

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const childrenLength = React.Children.count(props.children)
  return (
    <ol className={styled.items}>
      {React.Children.map(props.children, (child, i) => {
        if (!React.isValidElement(child)) return
        const isNode = (i < childrenLength - 1)
        return (
          <>
            {child}
            {isNode && <Icon type="arrow-right" className={styled.icon} />}
          </>
        )
      })}
    </ol>
  )
}

export default Breadcrumbs