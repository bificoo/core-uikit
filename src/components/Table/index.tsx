import React from "react"
import RsuiteTable, { TableProps, ColumnGroupProps } from "rsuite/lib/Table"
import { PaginationProps } from "rsuite/lib/Pagination"
import "rsuite/lib/Table/styles"
import "rsuite/lib/Pagination/styles"
import "rsuite/lib/SelectPicker/styles"
import "rsuite/lib/Divider/styles"
import styled from "./Table.module.scss"

export type { TableProps, TableColumnProps, TableCellProps, TableInstance } from "rsuite/lib/Table"
export type TableColumnGroupProps = ColumnGroupProps
export type TablePaginationProps = PaginationProps

const Table = (props: TableProps) => {
  return (
    <div className={styled.wrapper}>
      <RsuiteTable {...props} />
    </div>
  )
}

Table.Column = RsuiteTable.Column
Table.ColumnGroup = RsuiteTable.ColumnGroup
Table.HeaderCell = RsuiteTable.HeaderCell
Table.Cell = RsuiteTable.Cell
Table.Pagination = RsuiteTable.Pagination
export default Table
