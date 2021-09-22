'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var arrow = require('./arrow.svg.js');
var cx = require('classnames');
var Pagination_module = require('./Pagination.module.scss.js');
var index = require('../Dropdown/index.js');
var index$1 = require('../Button/Button/index.js');
require('../Button/LinkButton/LinkButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var getRange = function (_a) {
    var activePage = _a.activePage, pages = _a.pages, maxButtons = _a.maxButtons;
    var halfRange = Math.floor(maxButtons / 2);
    var begin = activePage - halfRange;
    var end = activePage + halfRange;
    // when end out of range
    if (end >= pages) {
        end = pages;
        begin = pages - halfRange * 2;
        begin = begin < 1 ? 1 : begin;
    }
    // when begin out of range
    if (begin < halfRange) {
        begin = 1;
        end = begin + maxButtons - 1;
    }
    var array = [];
    for (var i = begin; i <= end; i++)
        array.push(i);
    return array;
};
var Pagination = function (_a) {
    var _b, _c;
    var _d = _a.activePage, activePage = _d === void 0 ? 1 : _d, _e = _a.maxButtons, maxButtons = _e === void 0 ? 5 : _e, props = _tslib.__rest(_a, ["activePage", "maxButtons"]);
    var range = getRange({ activePage: activePage, pages: props.pages, maxButtons: maxButtons });
    var goto = function (page) {
        if (page === activePage)
            return;
        props.onSelect && props.onSelect(page);
    };
    var handleSelectLimit = function (e, _a) {
        var eventKey = _a.eventKey;
        if (eventKey && props.onLimitChange) {
            props.onLimitChange(+eventKey);
        }
    };
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: Pagination_module['default'].wrapper }, { children: [jsxRuntime.jsxs("div", _tslib.__assign({ className: Pagination_module['default'].pager }, { children: [props.limitMenu && props.limitMenu.length !== 0 && (jsxRuntime.jsxs(index['default'], _tslib.__assign({ className: Pagination_module['default'].limit, onSelect: handleSelectLimit }, { children: [jsxRuntime.jsx(index['default'].Toggle, { children: jsxRuntime.jsxs(index$1['default'], _tslib.__assign({ variant: "secondary" }, { children: [props.limit, " ", jsxRuntime.jsx(index['default'].Arrow, {}, void 0)] }), void 0) }, void 0), jsxRuntime.jsx(index['default'].Menu, _tslib.__assign({ style: { width: "59px" } }, { children: props.limitMenu.map(function (limit) { return (jsxRuntime.jsx(index['default'].Item, _tslib.__assign({ eventKey: limit }, { children: limit }), limit)); }) }), void 0)] }), void 0)), jsxRuntime.jsx("span", { children: "/ \u9801" }, void 0), jsxRuntime.jsx("div", { className: Pagination_module['default'].divider }, void 0), jsxRuntime.jsxs("div", _tslib.__assign({ className: Pagination_module['default'].total }, { children: ["\u7E3D\u5171", jsxRuntime.jsx("span", { children: props.total }, void 0), "\u7B46"] }), void 0)] }), void 0), jsxRuntime.jsxs("div", _tslib.__assign({ className: Pagination_module['default'].pages }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](Pagination_module['default'].previous, (_b = {},
                            _b[Pagination_module['default'].disabled] = activePage === 1,
                            _b)), onClick: function () { return activePage !== 1 && goto(activePage - 1); } }, { children: jsxRuntime.jsx(arrow.ReactComponent, {}, void 0) }), void 0), range.map(function (page) {
                        var _a;
                        return (jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](Pagination_module['default'].page, (_a = {},
                                _a[Pagination_module['default'].active] = page === activePage,
                                _a)), onClick: function () { return goto(page); } }, { children: page }), "page" + page));
                    }), jsxRuntime.jsx("div", _tslib.__assign({ className: cx__default['default'](Pagination_module['default'].next, (_c = {},
                            _c[Pagination_module['default'].disabled] = activePage === props.pages,
                            _c)), onClick: function () { return activePage !== props.pages && goto(activePage + 1); } }, { children: jsxRuntime.jsx(arrow.ReactComponent, {}, void 0) }), void 0)] }), void 0)] }), void 0));
};

exports['default'] = Pagination;
