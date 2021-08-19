import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './LinkButton.module.scss.js';

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, className = _a.className, _c = _a.children, children = _c === void 0 ? "Click" : _c, props = __rest(_a, ["variant", "className", "children"]);
    return (jsx("a", __assign({ className: cx(styled.wrapper, styled[variant], className) }, props, { children: children }), void 0));
};

export { Button as default };
