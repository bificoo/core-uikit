'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index = require('../../../node_modules/classnames/index.js');
var FormRadio_module = require('./FormRadio.module.scss.js');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var FormRadio = function (_a) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: index['default']("component-radio", FormRadio_module['default'].wrapper, props.className) }, { children: jsxRuntime.jsxRuntime.exports.jsxs("label", tslib_es6.__assign({ className: FormRadio_module['default'].label }, { children: [jsxRuntime.jsxRuntime.exports.jsx("input", tslib_es6.__assign({ type: "radio" }, props), void 0),
                jsxRuntime.jsxRuntime.exports.jsx("span", tslib_es6.__assign({ className: FormRadio_module['default'].content }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormRadio;
//# sourceMappingURL=index.js.map
