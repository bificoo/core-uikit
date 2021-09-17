import React, { useState } from "react"
import RsuiteTable, { TableProps as RsuiteTableProps, ColumnGroupProps } from "rsuite/lib/Table"
import Pagination from "./Pagination"
import "rsuite/lib/Table/styles"
import "rsuite/lib/Pagination/styles"
import "rsuite/lib/SelectPicker/styles"
import "rsuite/lib/Divider/styles"
import styled from "./Table.module.scss"

export type { TableColumnProps, TableCellProps, TableInstance } from "rsuite/lib/Table"
export type TableColumnGroupProps = ColumnGroupProps

export type TableProps = {
  limitMenu?: number[]
} & RsuiteTableProps

const Table = ({ limitMenu = [2, 4], maxButtons = 5, data = [], ...props }: TableProps) => {
  const [limit, setLimit] = useState(limitMenu[0])
  const [page, setPage] = useState(1)

  const handleSelect = (dataKey: number) => {
    setPage(dataKey)
  }

  const handleChangeLength = (dataKey: number) => {
    setPage(1)
    setLimit(dataKey)
  }

  const visualData = data.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit
    return i >= start && i < end
  })

  return (
    <div className={styled.wrapper}>
      <RsuiteTable {...props} data={visualData} />
      {data && data.length !== 0 && (
        <Pagination
          maxButtons={maxButtons}
          pages={data.length / limit}
          activePage={page}
          total={data.length}
          limitMenu={limitMenu}
          limit={limit}
          onSelect={handleSelect}
          onLimitChange={handleChangeLength}
        />
      )}
    </div>
  )
}

Table.Column = RsuiteTable.Column
Table.ColumnGroup = RsuiteTable.ColumnGroup
Table.HeaderCell = RsuiteTable.HeaderCell
Table.Cell = RsuiteTable.Cell
export default Table
