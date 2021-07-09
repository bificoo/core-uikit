'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index$1 = require('../../../node_modules/classnames/index.js');
require('../../../node_modules/react/index.js');
var Menu_module = require('./Menu.module.scss.js');
var index = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var DropdownMenu = index.react.exports.forwardRef(function (_a, ref) {
    var className = _a.className, style = _a.style, attributes = _a.attributes, children = _a.children;
    return (jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: index$1['default'](Menu_module['default'].wrapper, className), style: style, ref: ref }, attributes, { children: children }), void 0));
});
DropdownMenu.displayName = "DropdownMenu";

exports.default = DropdownMenu;
//# sourceMappingURL=index.js.map
