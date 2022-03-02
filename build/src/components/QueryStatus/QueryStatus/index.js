import { jsx, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import Loading from '../Loading/index.js';
import NoData from '../NoData/index.js';

var QueryStatus = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.noData, noData = _d === void 0 ? false : _d, children = _a.children, renderNoData = _a.renderNoData;
    return useMemo(function () {
        if (loading)
            return jsx(Loading, {}, void 0);
        else if (renderNoData && error)
            return renderNoData;
        else if (error)
            return jsx(NoData, {}, void 0);
        else if (renderNoData && noData)
            return renderNoData;
        else if (noData)
            return jsx(NoData, {}, void 0);
        else
            return jsx(Fragment, { children: children }, void 0);
    }, [loading, renderNoData, error, noData, children]);
};

export { QueryStatus as default };
