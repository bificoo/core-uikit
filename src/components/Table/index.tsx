import {
  TableProps as RsuiteTableProps,
  Column,
  Cell,
  HeaderCell,
  ColumnGroup,
  ColumnGroupProps,
} from "rsuite-table"
import TableBase from "./Table"
import PaginationTable from "./PaginationTable"

export type { CellProps as TableCellProps } from "rsuite-table/es"
export type TableColumnGroupProps = ColumnGroupProps
export type TableProps = RsuiteTableProps

const Table = Object.assign(TableBase, {
  Column,
  ColumnGroup,
  HeaderCell,
  Cell,
})

export { PaginationTable }
export default Table
