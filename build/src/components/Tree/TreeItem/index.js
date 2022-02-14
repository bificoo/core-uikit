import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import { TreeContext } from '../TreeContext.js';
import styled from './TreeItem.module.scss.js';
import cx from 'classnames';

var TreeItem = function (props) {
    var _a;
    var _b;
    var _c = useContext(TreeContext), selected = _c.selected, onNodeSelect = _c.onNodeSelect;
    return (jsx("div", __assign({ className: cx(styled.item, (_a = {}, _a[styled.active] = selected === null || selected === void 0 ? void 0 : selected.some(function (el) { return el === props.eventKey; }), _a)), style: { paddingLeft: "".concat(((((_b = props.nodes) === null || _b === void 0 ? void 0 : _b.length) || 0)) * 20, "px") }, onClick: function () { return props.nodes && onNodeSelect(props.nodes); } }, { children: jsx("span", { children: props.renderName }, void 0) }), void 0));
};

export { TreeItem as default };
