import Loading from "./Loading";
import Error from "./Error";
import NoData from "./NoData";
export type { QueryStatusProps } from "./QueryStatus";
declare const QueryStatus: (({ loading, error, noData, children, renderNoData, }: import("./QueryStatus").QueryStatusProps) => JSX.Element) & {
    Loading: typeof Loading;
    Error: typeof Error;
    NoData: typeof NoData;
};
export default QueryStatus;
