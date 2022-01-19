import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from './Error.module.scss.js';
import { useMemo } from 'react';

function Error(_a) {
    var width = _a.width, _b = _a.height, height = _b === void 0 ? 100 : _b;
    var style = useMemo(function () {
        var _style = {};
        if (width)
            _style.width = width;
        if (height)
            _style.height = height;
        return _style;
    }, [width, height]);
    return (jsx("div", __assign({ className: styled.wrapper, style: style }, { children: "error :(" }), void 0));
}

export { Error as default };
