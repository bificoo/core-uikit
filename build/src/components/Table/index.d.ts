import React from "react";
import { TableProps as RsuiteTableProps, ColumnGroupProps } from "rsuite/lib/Table";
import "rsuite/lib/Table/styles";
export type { TableColumnProps, TableCellProps, TableInstance } from "rsuite/lib/Table";
export declare type TableColumnGroupProps = ColumnGroupProps;
export declare type TableProps = {
    limitMenu?: number[];
} & RsuiteTableProps;
declare const Table: {
    ({ limitMenu, maxButtons, data, ...props }: TableProps): JSX.Element;
    Column: React.ComponentType<import("rsuite/lib/Table").TableColumnProps>;
    ColumnGroup: React.ComponentType<ColumnGroupProps>;
    HeaderCell: React.ComponentType<import("rsuite/lib/@types/common").StandardProps>;
    Cell: React.ComponentType<import("rsuite/lib/Table").TableCellProps>;
};
export default Table;
