import React from "react"

import { Table as RsuiteTable, TableProps as RsuiteTableProps } from "rsuite-table"

// C:\Users\User\Documents\core-uikit\node_modules\rsuite-table\es\less

import "rsuite-table/dist/css/rsuite-table.min.css"
import styled from "./Table.module.scss"
import QueryStatus from "components/QueryStatus"

export type TableProps = RsuiteTableProps

// TODO: 此元件應移到 core-uikit 專案中
const Table = ({ data = [], ...props }: TableProps) => {
  return (
    <div className={styled.wrapper}>
      <RsuiteTable
        {...props}
        autoHeight
        data={data}
        renderLoading={() => props.loading && <QueryStatus.Loading />}
      />
    </div>
  )
}

export default Table
