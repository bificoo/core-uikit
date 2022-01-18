import { __assign } from '../../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import { FormGroupContext } from '../../FormContext.js';
import styled from './InputGroup.module.scss.js';
import cx from 'classnames';

var InputGroup = function (props) {
    var _a;
    var attributes = useContext(FormGroupContext).attributes;
    return (jsx("div", __assign({ className: cx(styled.wrapper, (_a = {},
            _a[styled.entered] = attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            _a[styled.disabled] = attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            _a[styled["read-only"]] = attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
            _a[styled["is-valid"]] = attributes === null || attributes === void 0 ? void 0 : attributes.isValid,
            _a[styled["is-invalid"]] = attributes === null || attributes === void 0 ? void 0 : attributes.isInvalid,
            _a), props.className) }, { children: props.children }), void 0));
};
InputGroup.display = InputGroup;

export { InputGroup as default };
