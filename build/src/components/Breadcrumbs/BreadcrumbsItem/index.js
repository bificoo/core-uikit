'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var BreadcrumbsItem_module = require('./BreadcrumbsItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var BreadcrumbsItem = function (_a) {
    var _b;
    var href = _a.href, text = _a.text;
    return (jsxRuntime.jsx("li", _tslib.__assign({ className: BreadcrumbsItem_module["default"].wrapper }, { children: jsxRuntime.jsx("a", _tslib.__assign({ className: cx__default["default"](BreadcrumbsItem_module["default"].text, (_b = {},
                _b[BreadcrumbsItem_module["default"].active] = !href,
                _b)), href: href }, { children: text }), void 0) }), void 0));
};

exports["default"] = BreadcrumbsItem;
