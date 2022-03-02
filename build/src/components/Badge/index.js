import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './Badge.module.scss.js';

var Badge = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.pill, pill = _d === void 0 ? false : _d, className = _a.className, children = _a.children, props = __rest(_a, ["variant", "pill", "className", "children"]);
    return (jsx("span", __assign({ className: cx(styled.wrapper, styled[variant], (_b = {}, _b[styled.pill] = pill, _b), className) }, props, { children: children }), void 0));
};

export { Badge as default };
