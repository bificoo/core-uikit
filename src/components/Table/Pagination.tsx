import { ReactComponent as ArrowIcon } from "./arrow.svg"
import cx from "classnames"
import styled from "./Pagination.module.scss"
import Dropdown, { DropdownSelectEventProps } from "../Dropdown"
import Button from "components/Button"
import Icon from "components/Icon"
import React from "react"

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
  limit?: number
  limitMenu?: number[]
  onSelect?: (page: number) => void
  onLimitChange?: (limit: number) => void
}

const Pagination = ({ activePage = 1, maxButtons = 5, ...props }: PaginationProps) => {
  const range = getRange({ activePage, pages: props.pages, maxButtons })
  const goto = (page: number) => {
    if (page === activePage) return
    props.onSelect && props.onSelect(page)
  }
  const handleSelectLimit = (e: React.MouseEvent, { eventKey }: DropdownSelectEventProps) => {
    if (eventKey && props.onLimitChange) {
      props.onLimitChange(+eventKey)
    }
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.pager}>
        {props.limitMenu && props.limitMenu.length !== 0 && (
          <Dropdown className={styled.limit} onSelect={handleSelectLimit}>
            <Dropdown.Toggle>
              <Button variant="secondary" appendIcon>
                {props.limit} <Icon.Arrow />
              </Button>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "59px" }}>
              {props.limitMenu.map(limit => (
                <Dropdown.Item key={limit} eventKey={limit}>
                  {limit}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
        <span>/ 頁</span>
        <div className={styled.divider} />
        <div className={styled.total}>
          總共<span>{props.total}</span>筆
        </div>
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
