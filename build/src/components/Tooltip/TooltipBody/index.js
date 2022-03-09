import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from './TooltipBody.module.scss.js';

var TooltipBody = function (props) {
    return (jsx("div", __assign({ className: styled.wrapper, style: props.style }, { children: props.children })));
};
TooltipBody.display = TooltipBody;

export { TooltipBody as default };
