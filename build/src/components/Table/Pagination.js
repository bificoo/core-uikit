import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './Pagination.module.scss.js';
import Button from '../Button/index.js';
import Dropdown from '../Dropdown/index.js';
import Icon from '../Icon/index.js';

var getRange = function (_a) {
    var activePage = _a.activePage, pages = _a.pages, maxButtons = _a.maxButtons;
    var halfRange = Math.floor(maxButtons / 2);
    var begin = activePage - halfRange;
    var end = activePage + halfRange;
    // when begin out of range
    if (begin < halfRange) {
        begin = 1;
        end = begin + maxButtons - 1;
    }
    // when end out of range
    if (end >= pages) {
        end = pages;
        begin = pages - halfRange * 2;
        begin = begin < 1 ? 1 : begin;
    }
    var array = [];
    for (var i = begin; i <= end; i++)
        array.push(i);
    return array;
};
var Pagination = function (_a) {
    var _b, _c;
    var _d = _a.activePage, activePage = _d === void 0 ? 1 : _d, _e = _a.maxButtons, maxButtons = _e === void 0 ? 5 : _e, props = __rest(_a, ["activePage", "maxButtons"]);
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
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsxs("div", __assign({ className: styled.pager }, { children: [props.limitMenu && props.limitMenu.length !== 0 && (jsxs(Dropdown, __assign({ className: styled.limit, onSelect: handleSelectLimit }, { children: [jsx(Dropdown.Toggle, { children: jsxs(Button, __assign({ variant: "secondary", style: { minWidth: "75px" } }, { children: [props.limit, " ", jsx(Icon.Arrow, {}, void 0)] }), void 0) }, void 0), jsx(Dropdown.Menu, { children: props.limitMenu.map(function (limit) { return (jsx(Dropdown.Item, __assign({ eventKey: limit }, { children: limit }), limit)); }) }, void 0)] }), void 0)), jsx("span", __assign({ className: styled.slash }, { children: "/ \u9801" }), void 0), props.renderTotal && (jsxs(Fragment, { children: [jsx("div", { className: styled.divider }, void 0), jsx("div", __assign({ className: styled.total }, { children: typeof props.renderTotal === "function" && (props.renderTotal()) }), void 0)] }, void 0))] }), void 0), jsxs("div", __assign({ className: styled.pages }, { children: [jsx("div", __assign({ className: cx(styled.previous, (_b = {},
                            _b[styled.disabled] = activePage === 1,
                            _b)), onClick: function () { return activePage !== 1 && goto(activePage - 1); } }, { children: jsx(Icon.Arrow, { direction: "left" }, void 0) }), void 0), range.map(function (page) {
                        var _a;
                        return (jsx("div", __assign({ className: cx(styled.page, (_a = {},
                                _a[styled.active] = page === activePage,
                                _a)), onClick: function () { return goto(page); } }, { children: page }), "page".concat(page)));
                    }), jsx("div", __assign({ className: cx(styled.next, (_c = {},
                            _c[styled.disabled] = activePage === props.pages,
                            _c)), onClick: function () { return activePage !== props.pages && goto(activePage + 1); } }, { children: jsx(Icon.Arrow, { direction: "right" }, void 0) }), void 0)] }), void 0)] }), void 0));
};

export { Pagination as default };
