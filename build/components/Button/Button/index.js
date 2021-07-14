import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import cx from '../../../node_modules/classnames/index.js';
import styled from './Button.module.scss.js';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var Button = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.block, block = _d === void 0 ? false : _d, className = _a.className, _e = _a.children, children = _e === void 0 ? "Click" : _e, props = __rest(_a, ["variant", "block", "className", "children"]);
    return (jsxRuntime.exports.jsx("button", __assign({ className: cx(styled.wrapper, styled[variant], (_b = {}, _b[styled.block] = block, _b), className) }, props, { children: children }), void 0));
};

export default Button;
//# sourceMappingURL=index.js.map
