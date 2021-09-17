import { ReactComponent as ArrowIcon } from "./arrow.svg"
import cx from "classnames"
import styled from "./Pagination.module.scss"

const getRange = ({
  activePage,
  pages,
  maxButtons,
}: {
  activePage: number
  pages: number
  maxButtons: number
}) => {
  const halfRange = Math.floor(maxButtons / 2)
  let begin = activePage - halfRange
  let end = activePage + halfRange

  // when end out of range
  if (end >= pages) {
    end = pages
    begin = pages - halfRange * 2
    begin = begin < 1 ? 1 : begin
  }

  // when begin out of range
  if (begin < halfRange) {
    begin = 1
    end = begin + maxButtons - 1
  }

  const array = []
  for (let i = begin; i <= end; i++) array.push(i)
  return array
}

export type PaginationProps = {
  total: number
  pages: number
  activePage?: number
  maxButtons?: number
  onSelect?: (page: number) => void
}

const Pagination = ({ activePage = 1, maxButtons = 5, ...props }: PaginationProps) => {
  const range = getRange({ activePage, pages: props.pages, maxButtons })
  const goto = (page: number) => {
    if (page === activePage) return
    props.onSelect && props.onSelect(page)
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.total}>
        總共<span>{props.total}</span>筆
      </div>
      <div className={styled.pages}>
        <div
          className={cx(styled.previous, {
            [styled.disabled]: activePage === 1,
          })}
          onClick={() => activePage !== 1 && goto(activePage - 1)}>
          <ArrowIcon />
        </div>
        {range.map(page => (
          <div
            key={`page${page}`}
            className={cx(styled.page, {
              [styled.active]: page === activePage,
            })}
            onClick={() => goto(page)}>
            {page}
          </div>
        ))}
        <div
          className={cx(styled.next, {
            [styled.disabled]: activePage === props.pages,
          })}
          onClick={() => activePage !== props.pages && goto(activePage + 1)}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  )
}

export default Pagination
