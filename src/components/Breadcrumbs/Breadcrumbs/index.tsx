import styled from "./Breadcrumbs.module.scss"
import { WithChildren } from "types/common"

export type BreadcrumbsProps = WithChildren

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <div className={styled.wrapper}>
      <ol className={styled.items}>{props.children}</ol>
    </div>
  )
}

export default Breadcrumbs