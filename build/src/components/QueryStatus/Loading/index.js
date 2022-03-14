import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import styled from './Loading.module.scss.js';
import { useMemo } from 'react';

function Loading(_a) {
    var width = _a.width, height = _a.height;
    var style = useMemo(function () {
        var _style = {};
        if (width)
            _style.width = width;
        if (height)
            _style.height = height;
        return _style;
    }, [width, height]);
    return (jsx("div", __assign({ className: styled.wrapper, style: style }, { children: jsxs("svg", __assign({ width: "50px", height: "50px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, { children: [jsx("rect", __assign({ x: "15", y: "30", width: "10", height: "40", fill: "#85a2b6" }, { children: jsx("animate", { attributeName: "opacity", dur: "1s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", values: "1;0.2;1", begin: "-0.6" }, void 0) }), void 0), jsx("rect", __assign({ x: "35", y: "30", width: "10", height: "40", fill: "#bbcedd" }, { children: jsx("animate", { attributeName: "opacity", dur: "1s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", values: "1;0.2;1", begin: "-0.4" }, void 0) }), void 0), jsx("rect", __assign({ x: "55", y: "30", width: "10", height: "40", fill: "#dce4eb" }, { children: jsx("animate", { attributeName: "opacity", dur: "1s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", values: "1;0.2;1", begin: "-0.2" }, void 0) }), void 0), jsx("rect", __assign({ x: "75", y: "30", width: "10", height: "40", fill: "#fdfdfd" }, { children: jsx("animate", { attributeName: "opacity", dur: "1s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", values: "1;0.2;1", begin: "-1" }, void 0) }), void 0)] }), void 0) }), void 0));
}

export { Loading as default };
