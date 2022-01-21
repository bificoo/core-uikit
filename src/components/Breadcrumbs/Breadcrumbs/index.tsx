import React from "react"
import styled from "./Breadcrumbs.module.scss"
import { WithChildren } from "types/common"

export type BreadcrumbsProps = WithChildren

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const childrenLength = React.Children.count(props.children)
  return (
    <ol className={styled.items}>
      {React.Children.map(props.children, (child, i) => {
        if (!React.isValidElement(child)) return
        return React.cloneElement(child, {
          isNode: i < childrenLength - 1,
        })
      })}
    </ol>
  )
}

export default Breadcrumbs