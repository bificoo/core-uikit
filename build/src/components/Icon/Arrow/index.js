import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { ReactComponent as SvgArrow } from './arrow.svg.js';
import styled from './Arrow.module.scss.js';
import cx from 'classnames';

var Arrow = function (_a) {
    var className = _a.className, _b = _a.direction, direction = _b === void 0 ? "down" : _b, style = _a.style;
    return (jsx("div", __assign({ className: cx(styled.wrapper, className, styled["direction-".concat(direction)]), style: style }, { children: jsx(SvgArrow, {}, void 0) }), void 0));
};

export { Arrow as default };
