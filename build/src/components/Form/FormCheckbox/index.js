import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import cx from 'classnames';
import { ReactComponent as SvgCheck } from './check.svg.js';
import styled from './FormCheckbox.module.scss.js';

var FormCheckbox = function (_a) {
    var _b;
    var children = _a.children, inline = _a.inline, props = __rest(_a, ["children", "inline"]);
    return (jsx("div", __assign({ className: cx("component-checkbox", styled.wrapper, (_b = {}, _b[styled.inline] = inline, _b), props.className) }, { children: jsxs("label", __assign({ className: styled.label }, { children: [jsx("input", __assign({ type: "checkbox" }, props), void 0), !props.checked ? (jsx(SvgCheck, { className: cx(styled.check) }, void 0)) : (jsx(SvgCheck, { className: cx(styled.check) }, void 0)), jsx("span", __assign({ className: styled.content }, { children: children }), void 0)] }), void 0) }), void 0));
};

export { FormCheckbox as default };
