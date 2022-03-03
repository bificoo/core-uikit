import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Icon } from '../../Icon/index.js';
import { CollapseContext } from '../CollapseContext.js';
import styled from './CollapseHeader.module.scss.js';
import { useContext } from 'react';
import cx from 'classnames';

var CollapseHeader = function (props) {
    var _a = useContext(CollapseContext), expanded = _a.expanded, setExpanded = _a.setExpanded;
    return (jsxs("header", __assign({ className: cx(props.className, styled.wrapper), onClick: function () { return setExpanded(!expanded); }, style: props.style }, { children: [props.children, " ", jsx(Icon, { name: !expanded ? "arrow-up" : "arrow-down", style: { marginLeft: "4px" } }, void 0)] }), void 0));
};

export { CollapseHeader as default };
