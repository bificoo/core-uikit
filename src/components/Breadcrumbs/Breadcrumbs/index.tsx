import styled from "./Breadcrumbs.module.scss"

export type BreadcrumbsProps = ReactProps.WithChildren

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <div>
      <ol className={styled.items}>{props.children}</ol>
    </div>
  )
}

export default Breadcrumbs
