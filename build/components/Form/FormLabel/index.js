import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import '../../../node_modules/react/index.js';
import { FormGroupContext } from '../FormContext.js';
import styled from './FormLabel.module.scss.js';
import cx from '../../../node_modules/classnames/index.js';
import { r as react } from '../../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var FormLabel = function (_a) {
    var _b;
    var _c = _a.required, required = _c === void 0 ? false : _c, className = _a.className, htmlFor = _a.htmlFor, props = __rest(_a, ["required", "className", "htmlFor"]);
    var attributes = react.exports.useContext(FormGroupContext).attributes;
    return (jsxRuntime.exports.jsx("label", __assign({ htmlFor: htmlFor || (attributes === null || attributes === void 0 ? void 0 : attributes.formId), className: cx(styled.wrapper, className, (_b = {},
            _b[styled.required] = required,
            _b)) }, props, { children: props.children }), void 0));
};

export default FormLabel;
//# sourceMappingURL=index.js.map
