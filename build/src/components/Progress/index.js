import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import styled from './Progress.module.scss.js';

var PERCENT_MAX = 100;
var Progress = function (props) {
    var alignPercent = props.percent > PERCENT_MAX ? PERCENT_MAX : props.percent;
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsx("div", __assign({ className: styled["progress-bar"] }, { children: jsx("div", { className: styled.inner, style: { width: "".concat(alignPercent, "%") } }) })), jsxs("div", __assign({ className: styled.percent }, { children: [props.percent, "%"] }))] })));
};

export { Progress as default };
