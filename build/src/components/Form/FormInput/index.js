import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useContext, useState, useEffect } from 'react';
import { FormGroupContext } from '../FormContext.js';
import cx from 'classnames';
import styled from './FormInput.module.scss.js';

var FormInput = React__default.forwardRef(function FormInput(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, _c = _a.type, type = _c === void 0 ? "text" : _c, isValid = _a.isValid, isInvalid = _a.isInvalid, props = __rest(_a, ["className", "type", "isValid", "isInvalid"]);
    var _d = useContext(FormGroupContext), attributes = _d.attributes, setAttributes = _d.setAttributes;
    var _e = useState(false), entered = _e[0], setEntered = _e[1];
    useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: props.disabled,
            readOnly: props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly, setAttributes]);
    return (jsx("div", __assign({ className: cx("component-input", styled.wrapper, (_b = {},
            _b[styled.entered] = entered,
            _b[styled.disabled] = !!props.disabled,
            _b[styled["read-only"]] = !!props.readOnly,
            _b[styled["is-valid"]] = isValid,
            _b[styled["is-invalid"]] = isInvalid,
            _b)), style: props.style }, { children: jsx("input", __assign({}, props, { ref: ref, type: type, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: cx(styled.control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

export { FormInput as default };
