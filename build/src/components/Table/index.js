import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import Table$1 from '../../../node_modules/rsuite-table/es/Table.js';
import Column from '../../../node_modules/rsuite-table/es/Column.js';
import Cell from '../../../node_modules/rsuite-table/es/Cell.js';
import HeaderCell from '../../../node_modules/rsuite-table/es/HeaderCell.js';
import ColumnGroup from '../../../node_modules/rsuite-table/es/ColumnGroup.js';
import Pagination from './Pagination.js';
import '../../../node_modules/rsuite-table/dist/css/rsuite-table.min.css.js';
import styled from './Table.module.scss.js';
import QueryStatus from '../QueryStatus/index.js';

// TODO: 此元件應移到 core-uikit 專案中
var Table = function (_a) {
    var _b = _a.limitMenu, limitMenu = _b === void 0 ? [10, 30, 50, 100] : _b, _c = _a.maxButtons, maxButtons = _c === void 0 ? 5 : _c, _d = _a.data, data = _d === void 0 ? [] : _d, _e = _a.renderTotal, renderTotal = _e === void 0 ? true : _e, onSelectPage = _a.onSelectPage, props = __rest(_a, ["limitMenu", "maxButtons", "data", "renderTotal", "onSelectPage"]);
    var _f = useState(limitMenu[0]), limit = _f[0], setLimit = _f[1];
    var _g = useState(1), page = _g[0], setPage = _g[1];
    var handleSelect = function (page) {
        setPage(page);
        onSelectPage && onSelectPage(page, limit);
    };
    var handleChangeLength = function (dataKey) {
        setPage(1);
        setLimit(dataKey);
        onSelectPage && onSelectPage(1, dataKey);
    };
    var visualData = data.filter(function (v, i) {
        var start = limit * (page - 1);
        var end = start + limit;
        return i >= start && i < end;
    });
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsx(Table$1, __assign({}, props, { autoHeight: true, data: visualData, renderLoading: function () { return props.loading && jsx(QueryStatus.Loading, {}, void 0); } }), void 0), data && data.length !== 0 && (jsx(Pagination, { maxButtons: maxButtons, pages: Math.ceil(data.length / limit), activePage: page, total: data.length, limitMenu: limitMenu, limit: limit, renderTotal: typeof renderTotal === "function" ? function () { return renderTotal(data.length); } : renderTotal, onSelect: handleSelect, onLimitChange: handleChangeLength }, void 0))] }), void 0));
};
Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export { Table as default };
