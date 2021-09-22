'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../../node_modules/rsuite/lib/Table/index.js');
var Pagination = require('./Pagination.js');
var Table_module = require('./Table.module.scss.js');

var Table = function (_a) {
    var _b = _a.limitMenu, limitMenu = _b === void 0 ? [2, 4] : _b, _c = _a.maxButtons, maxButtons = _c === void 0 ? 5 : _c, _d = _a.data, data = _d === void 0 ? [] : _d, props = _tslib.__rest(_a, ["limitMenu", "maxButtons", "data"]);
    var _e = React.useState(limitMenu[0]), limit = _e[0], setLimit = _e[1];
    var _f = React.useState(1), page = _f[0], setPage = _f[1];
    var handleSelect = function (dataKey) {
        setPage(dataKey);
    };
    var handleChangeLength = function (dataKey) {
        setPage(1);
        setLimit(dataKey);
    };
    var visualData = data.filter(function (v, i) {
        var start = limit * (page - 1);
        var end = start + limit;
        return i >= start && i < end;
    });
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: Table_module['default'].wrapper }, { children: [jsxRuntime.jsx(index['default'], _tslib.__assign({}, props, { data: visualData }), void 0), data && data.length !== 0 && (jsxRuntime.jsx(Pagination['default'], { maxButtons: maxButtons, pages: data.length / limit, activePage: page, total: data.length, limitMenu: limitMenu, limit: limit, onSelect: handleSelect, onLimitChange: handleChangeLength }, void 0))] }), void 0));
};
Table.Column = index['default'].Column;
Table.ColumnGroup = index['default'].ColumnGroup;
Table.HeaderCell = index['default'].HeaderCell;
Table.Cell = index['default'].Cell;

exports['default'] = Table;
