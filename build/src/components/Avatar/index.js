import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import styled from './Avatar.module.scss.js';

var Avatar = function (props) {
    var defaultAvatar = (jsx("div", __assign({ className: styled["default-avatar"] }, { children: jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", role: "presentation" }, { children: jsxs("g", __assign({ fill: "currentColor", fillRule: "evenodd" }, { children: [jsx("path", { d: "M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z" }, void 0), jsx("circle", { cx: "12", cy: "7", r: "4" }, void 0)] }), void 0) }), void 0) }), void 0));
    return (jsx("div", { children: jsx("div", __assign({ className: styled.outer, style: props.style }, { children: props.children ? props.children : defaultAvatar }), void 0) }, void 0));
};

export { Avatar as default };
