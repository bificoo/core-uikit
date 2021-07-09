import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import React from '../../../node_modules/react/index.js';
import FormLabel from '../FormLabel/index.js';
import FormContext, { FormGroupContext } from '../FormContext.js';
import '../../../utils/uuid.js';
import styled from './FormGroup.module.scss.js';
import cx from '../../../node_modules/classnames/index.js';
import { nanoid } from '../../../node_modules/nanoid/index.js';
import { r as react } from '../../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var FormGroup = function (props) {
    var _a = react.exports.useState({
        formId: props.formId || nanoid(),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = react.exports.useContext(FormContext).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return __assign(__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    React.Children.forEach(props.children, function (child, index) {
        if (!React.isValidElement(child))
            return;
        if (child.type === FormLabel) {
            label = React.cloneElement(child, __assign(__assign({}, child.props), { style: __assign(__assign({}, child.props.style), { width: labelWidth + "px" }) }));
        }
        else {
            children.push(React.cloneElement(child, { key: index }));
        }
    });
    return (jsxRuntime.exports.jsx(FormGroupContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.exports.jsxs("div", __assign({ className: cx(styled.wrapper, styled[layout], props.className) }, { children: [label, jsxRuntime.exports.jsx("div", __assign({ className: styled.group }, { children: children }), void 0)] }), void 0) }), void 0));
};

export default FormGroup;
//# sourceMappingURL=index.js.map
