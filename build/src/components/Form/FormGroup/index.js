'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../FormLabel/index.js');
var FormContext = require('../FormContext.js');
var uuid = require('../../../utils/uuid.js');
var FormGroup_module = require('./FormGroup.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FormGroup = (props) => {
    const [attributes, setAttributes] = React.useState({
        formId: props.formId || uuid['default'](),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    });
    const { attributes: formAttributes } = React.useContext(FormContext['default']);
    const layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    const labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    const update = (attributes) => {
        setAttributes(prev => {
            return Object.assign(Object.assign({}, prev), attributes);
        });
    };
    let label = null;
    const children = [];
    React__default['default'].Children.forEach(props.children, (child, index$1) => {
        if (!React__default['default'].isValidElement(child))
            return;
        if (child.type === index['default']) {
            label = React__default['default'].cloneElement(child, Object.assign(Object.assign({}, child.props), { style: Object.assign(Object.assign({}, child.props.style), { width: `${labelWidth}px` }) }));
        }
        else {
            children.push(React__default['default'].cloneElement(child, { key: index$1 }));
        }
    });
    return (jsxRuntime.jsx(FormContext.FormGroupContext.Provider, Object.assign({ value: { attributes, setAttributes: update } }, { children: jsxRuntime.jsxs("div", Object.assign({ className: cx__default['default'](FormGroup_module['default'].wrapper, FormGroup_module['default'][layout], props.className) }, { children: [label, jsxRuntime.jsx("div", Object.assign({ className: FormGroup_module['default'].group }, { children: children }), void 0)] }), void 0) }), void 0));
};

exports['default'] = FormGroup;
