import React, { useState, useEffect } from "react"


import {
  Table as RsuiteTable,
  TableProps as RsuiteTableProps,
  Column,
  Cell,
  HeaderCell,
  ColumnGroup,
  ColumnGroupProps
} from "rsuite-table"

// C:\Users\User\Documents\core-uikit\node_modules\rsuite-table\es\less

import Pagination from "./Pagination"
import 'rsuite-table/dist/css/rsuite-table.min.css';
import styled from "./Table.module.scss"
import QueryStatus from "components/QueryStatus"
import usePrevious from "hooks/usePrevious"

export type { CellProps as TableCellProps } from "rsuite-table/es"
export type TableColumnGroupProps = ColumnGroupProps

export type TableProps = {
  /** 最多顯示幾筆的下拉選單選項，預設為 10、30、50、100 筆 */
  limitMenu?: number[]

  /** 自定義總共幾筆介面，預設顯示「總共幾筆」 */
  renderTotal?: ((total: number) => React.ReactNode) | boolean

  /** 切換頁面時觸發事件 */
  onSelectPage?: (page: number, limit: number) => void

  maxButtons?: number
} & RsuiteTableProps

// TODO: 此元件應移到 core-uikit 專案中
const Table = ({
  limitMenu = [10, 30, 50, 100],
  maxButtons = 5,
  data = [],
  renderTotal = true,
  onSelectPage,
  ...props
}: TableProps) => {
  const [limit, setLimit] = useState(limitMenu[0])
  const [page, setPage] = useState(1)
  const dataPrevious = usePrevious(data)

  const handleSelect = (page: number) => {
    setPage(page)
    onSelectPage && onSelectPage(page, limit)
  }

  const handleChangeLength = (dataKey: number) => {
    setPage(1)
    setLimit(dataKey)
    onSelectPage && onSelectPage(1, dataKey)
  }

  const visualData = data.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit
    return i >= start && i < end
  })


  useEffect(() => {
    if (JSON.stringify(dataPrevious) !== JSON.stringify(data)) {
      setPage(1)
    }
  }, [data, dataPrevious])

  return (
    <div className={styled.wrapper}>
      <RsuiteTable
        {...props}
        autoHeight
        data={visualData}
        renderLoading={() => props.loading && <QueryStatus.Loading />}
      />
      {data && data.length !== 0 && (
        <Pagination
          maxButtons={maxButtons}
          pages={Math.ceil(data.length / limit)}
          activePage={page}
          total={data.length}
          limitMenu={limitMenu}
          limit={limit}
          renderTotal={
            typeof renderTotal === "function" ? () => renderTotal(data.length) : renderTotal
          }
          onSelect={handleSelect}
          onLimitChange={handleChangeLength}
        />
      )}
    </div>
  )
}

Table.Column = Column
Table.ColumnGroup = ColumnGroup
Table.HeaderCell = HeaderCell
Table.Cell = Cell
export default Table
