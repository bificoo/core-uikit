import React from "react";
import { TableProps as RsuiteTableProps, Column, ColumnGroupProps } from "rsuite-table";
import 'rsuite-table/dist/css/rsuite-table.min.css';
export type { CellProps as TableCellProps } from "rsuite-table/es";
export declare type TableColumnGroupProps = ColumnGroupProps;
export declare type TableProps = {
    /** 最多顯示幾筆的下拉選單選項，預設為 10、30、50、100 筆 */
    limitMenu?: number[];
    /** 自定義總共幾筆介面，預設顯示「總共幾筆」 */
    renderTotal?: ((total: number) => React.ReactNode) | boolean;
    /** 切換頁面時觸發事件 */
    onSelectPage?: (page: number, limit: number) => void;
    maxButtons?: number;
} & RsuiteTableProps;
declare const Table: {
    ({ limitMenu, maxButtons, data, renderTotal, onSelectPage, ...props }: TableProps): JSX.Element;
    Column: typeof Column;
    ColumnGroup: React.ForwardRefExoticComponent<ColumnGroupProps & React.RefAttributes<HTMLDivElement>>;
    HeaderCell: React.ForwardRefExoticComponent<import("rsuite-table").HeaderCellProps & React.RefAttributes<HTMLDivElement>>;
    Cell: React.ForwardRefExoticComponent<import("rsuite-table/lib/Cell").InnerCellProps & React.RefAttributes<HTMLDivElement>>;
};
export default Table;
