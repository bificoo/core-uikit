import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import styled from './Progress.module.scss.js';

var Progress = function (props) {
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsx("div", __assign({ className: styled["progress-bar"] }, { children: jsx("div", { className: styled.inner, style: { width: "".concat(props.percent, "%") } }, void 0) }), void 0), jsxs("div", __assign({ className: styled.percent }, { children: [props.percent, "%"] }), void 0)] }), void 0));
};

export { Progress as default };
