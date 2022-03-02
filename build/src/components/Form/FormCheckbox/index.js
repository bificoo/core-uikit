import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import cx from 'classnames';
import { ReactComponent as SvgCheck } from './check.svg.js';
import styled from './FormCheckbox.module.scss.js';

var FormCheckbox = React__default.forwardRef(function FormCheckbox(_a, ref) {
    var _b, _c;
    var children = _a.children, inline = _a.inline, props = __rest(_a, ["children", "inline"]);
    if (ref === void 0) { ref = null; }
    return (jsx("div", __assign({ className: cx("component-checkbox", styled.wrapper, (_b = {}, _b[styled.inline] = inline, _b), props.className) }, { children: jsxs("label", __assign({ className: cx(styled.label, (_c = {}, _c[styled.disabled] = props.disabled, _c)) }, { children: [jsx("input", __assign({}, props, { ref: ref, type: "checkbox" })), jsx(SvgCheck, { className: cx(styled.check) }), jsx("span", __assign({ className: styled.content }, { children: children }))] })) })));
});

export { FormCheckbox as default };
