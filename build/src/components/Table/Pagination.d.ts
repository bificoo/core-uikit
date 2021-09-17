export declare type PaginationProps = {
    total: number;
    pages: number;
    activePage?: number;
    maxButtons?: number;
    limit?: number;
    limitMenu?: number[];
    onSelect?: (page: number) => void;
    onLimitChange?: (limit: number) => void;
};
declare const Pagination: ({ activePage, maxButtons, ...props }: PaginationProps) => JSX.Element;
export default Pagination;
