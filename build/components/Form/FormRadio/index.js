import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import cx from '../../../node_modules/classnames/index.js';
import styled from './FormRadio.module.scss.js';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var FormRadio = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (jsxRuntime.exports.jsx("div", __assign({ className: cx("component-radio", styled.wrapper, props.className) }, { children: jsxRuntime.exports.jsxs("label", __assign({ className: styled.label }, { children: [jsxRuntime.exports.jsx("input", __assign({ type: "radio" }, props), void 0),
                jsxRuntime.exports.jsx("span", __assign({ className: styled.content }, { children: children }), void 0)] }), void 0) }), void 0));
};

export default FormRadio;
//# sourceMappingURL=index.js.map
