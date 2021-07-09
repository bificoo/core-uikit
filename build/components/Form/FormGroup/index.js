'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index$2 = require('../../../node_modules/react/index.js');
var index$3 = require('../FormLabel/index.js');
var FormContext = require('../FormContext.js');
require('../../../utils/uuid.js');
var FormGroup_module = require('./FormGroup.module.scss.js');
var index$4 = require('../../../node_modules/classnames/index.js');
var index$1 = require('../../../node_modules/nanoid/index.js');
var index = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var FormGroup = function (props) {
    var _a = index.react.exports.useState({
        formId: props.formId || index$1.nanoid(),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = index.react.exports.useContext(FormContext['default']).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return tslib_es6.__assign(tslib_es6.__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    index$2['default'].Children.forEach(props.children, function (child, index) {
        if (!index$2['default'].isValidElement(child))
            return;
        if (child.type === index$3['default']) {
            label = index$2['default'].cloneElement(child, tslib_es6.__assign(tslib_es6.__assign({}, child.props), { style: tslib_es6.__assign(tslib_es6.__assign({}, child.props.style), { width: labelWidth + "px" }) }));
        }
        else {
            children.push(index$2['default'].cloneElement(child, { key: index }));
        }
    });
    return (jsxRuntime.jsxRuntime.exports.jsx(FormContext.FormGroupContext.Provider, tslib_es6.__assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.jsxRuntime.exports.jsxs("div", tslib_es6.__assign({ className: index$4['default'](FormGroup_module['default'].wrapper, FormGroup_module['default'][layout], props.className) }, { children: [label, jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: FormGroup_module['default'].group }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports.default = FormGroup;
//# sourceMappingURL=index.js.map
