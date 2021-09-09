import RsuiteTable, { TableProps, ColumnGroupProps } from "rsuite/lib/Table"
import "rsuite/lib/Table/styles"
import styled from "./Table.module.scss"

export type {
  TableProps,
  TableColumnProps,
  TableCellProps,
  TablePaginationProps,
  TableInstance,
} from "rsuite/lib/Table"
export type TableColumnGroupProps = ColumnGroupProps

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
