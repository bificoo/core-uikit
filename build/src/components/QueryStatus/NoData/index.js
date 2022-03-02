import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import styled from './NoData.module.scss.js';
import { useMemo } from 'react';
import { ReactComponent as SvgNoData } from './noData.svg.js';

function NoData(_a) {
    var width = _a.width, height = _a.height;
    var style = useMemo(function () {
        var _style = {};
        if (width)
            _style.width = width;
        if (height)
            _style.height = height;
        return _style;
    }, [width, height]);
    return (jsxs("div", __assign({ className: styled.wrapper, style: style }, { children: [jsx(SvgNoData, {}), jsx("div", __assign({ className: styled.text }, { children: "\u6C92\u8CC7\u6599" }))] })));
}

export { NoData as default };
