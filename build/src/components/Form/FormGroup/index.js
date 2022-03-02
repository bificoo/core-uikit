import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useState, useContext } from 'react';
import FormLabel from '../FormLabel/index.js';
import FormContext, { FormGroupContext } from '../FormContext.js';
import uuid from '../../../utils/uuid.js';
import styled from './FormGroup.module.scss.js';
import cx from 'classnames';

var FormGroup = function (props) {
    var _a = useState({
        formId: props.formId || uuid(),
        entered: false,
        disabled: false,
        readOnly: false,
        isValid: null,
        isInvalid: null,
    }), attributes = _a[0], setAttributes = _a[1];
    var formAttributes = useContext(FormContext).attributes;
    var layout = props.layout || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.layout) || "horizontal";
    var labelWidth = props.labelWidth || (formAttributes === null || formAttributes === void 0 ? void 0 : formAttributes.labelWidth) || "auto";
    var update = function (attributes) {
        setAttributes(function (prev) {
            return __assign(__assign({}, prev), attributes);
        });
    };
    var label = null;
    var children = [];
    React__default.Children.forEach(props.children, function (child, index) {
        if (!React__default.isValidElement(child))
            return;
        if (child.type === FormLabel) {
            label = React__default.cloneElement(child, __assign(__assign({}, child.props), { style: __assign(__assign({}, child.props.style), { width: "".concat(labelWidth, "px") }) }));
        }
        else {
            children.push(React__default.cloneElement(child, { key: index }));
        }
    });
    return (jsx(FormGroupContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxs("div", __assign({ className: cx(styled.wrapper, styled[layout], props.className) }, { children: [label, jsx("div", __assign({ className: styled.group }, { children: children }))] })) })));
};

export { FormGroup as default };
