import QueryStatus$1 from './QueryStatus/index.js';
import Loading from './Loading/index.js';
import Error from './Error/index.js';
import NoData from './NoData/index.js';

var QueryStatus = Object.assign(QueryStatus$1, {
    Loading: Loading,
    Error: Error,
    NoData: NoData,
});

export { QueryStatus as default };
