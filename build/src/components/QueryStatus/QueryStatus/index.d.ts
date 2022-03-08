/// <reference types="react" />
export declare type QueryStatusProps = {
    loading?: boolean;
    error?: boolean;
    noData?: boolean;
    renderNoData?: JSX.Element;
} & ReactProps.Component;
declare const QueryStatus: ({ loading, error, noData, children, renderNoData, }: QueryStatusProps) => JSX.Element;
export default QueryStatus;
