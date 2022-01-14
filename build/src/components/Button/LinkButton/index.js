import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './LinkButton.module.scss.js';

var LinkButton = function (_a) {
    var className = _a.className, _b = _a.children, children = _b === void 0 ? "Click" : _b, props = __rest(_a, ["className", "children"]);
    return (jsx("a", __assign({ className: cx(styled.wrapper, styled.primary, className) }, props, { children: children }), void 0));
};
LinkButton.display = LinkButton;

export { LinkButton, LinkButton as default };
