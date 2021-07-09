'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
require('../../node_modules/react/jsx-runtime.js');
var index = require('../../node_modules/classnames/index.js');
var Badge_module = require('./Badge.module.scss.js');
var jsxRuntime = require('../../_virtual/jsx-runtime.js_commonjs-module');

var Badge = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.pill, pill = _d === void 0 ? false : _d, className = _a.className, children = _a.children, props = tslib_es6.__rest(_a, ["variant", "pill", "className", "children"]);
    return (jsxRuntime.jsxRuntime.exports.jsx("span", tslib_es6.__assign({ className: index['default'](Badge_module['default'].wrapper, Badge_module['default'][variant], (_b = {}, _b[Badge_module['default'].pill] = pill, _b), className) }, props, { children: children }), void 0));
};

exports.default = Badge;
//# sourceMappingURL=index.js.map
