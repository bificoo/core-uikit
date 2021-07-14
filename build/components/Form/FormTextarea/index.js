import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import React from '../../../node_modules/react/index.js';
import { FormGroupContext } from '../FormContext.js';
import cx from '../../../node_modules/classnames/index.js';
import styled from './FormTextarea.module.scss.js';
import { r as react } from '../../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var FormTextarea = React.forwardRef(function FormTextarea(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, isValid = _a.isValid, isInvalid = _a.isInvalid, props = __rest(_a, ["className", "isValid", "isInvalid"]);
    var _c = react.exports.useContext(FormGroupContext), attributes = _c.attributes, setAttributes = _c.setAttributes;
    var _d = react.exports.useState(false), entered = _d[0], setEntered = _d[1];
    react.exports.useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: !!props.disabled,
            readOnly: !!props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (jsxRuntime.exports.jsx("div", __assign({ className: cx("component-textarea", styled.wrapper, (_b = {},
            _b[styled.entered] = entered,
            _b[styled.disabled] = !!props.disabled,
            _b[styled["read-only"]] = !!props.readOnly,
            _b[styled["is-valid"]] = isValid,
            _b[styled["is-invalid"]] = isInvalid,
            _b)) }, { children: jsxRuntime.exports.jsx("textarea", __assign({}, props, { ref: ref, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: cx(styled.control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

export default FormTextarea;
//# sourceMappingURL=index.js.map
