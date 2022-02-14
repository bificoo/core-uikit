import { __spreadArray, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useContext, useRef } from 'react';
import Icon from '../../Icon/index.js';
import styled from './TreeCategory.module.scss.js';
import cx from 'classnames';
import { TreeContext } from '../TreeContext.js';

var TreeCategory = function (props) {
    var _a, _b;
    var _c = useContext(TreeContext), selected = _c.selected, expanded = _c.expanded, onNodeToggle = _c.onNodeToggle;
    var expandedRef = useRef(expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; }));
    var nodes = props.nodes ? __spreadArray(__spreadArray([], props.nodes, true), [props.eventKey], false) : [props.eventKey];
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsxs("div", __assign({ className: cx(styled.category, (_a = {},
                    _a[styled.active] = selected === null || selected === void 0 ? void 0 : selected.some(function (el) { return el === props.eventKey; }),
                    _a[styled["first-level"]] = nodes.length === 1,
                    _a)), style: { paddingLeft: "".concat((nodes.length - 1) * 20, "px") }, onClick: function () {
                    var result = __spreadArray([], expanded, true);
                    if (!expandedRef.current)
                        result.push(props.eventKey);
                    else {
                        var index = result.indexOf(props.eventKey);
                        result.splice(index, 1);
                    }
                    expandedRef.current = !expandedRef.current;
                    onNodeToggle(result);
                } }, { children: [jsx(Icon.Arrow, { direction: (expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; })) ? "down" : "right" }, void 0), jsx("div", __assign({ className: styled.name }, { children: props.renderName }), void 0)] }), void 0), jsx("div", __assign({ className: cx(styled.content, (_b = {}, _b[styled.expanded] = expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; }), _b)) }, { children: React__default.Children.map(props.children, function (child, index) {
                    if (React__default.isValidElement(child)) {
                        return React__default.cloneElement(child, __assign(__assign({}, child.props), { nodes: nodes, key: index }));
                    }
                }) }), void 0)] }), void 0));
};

export { TreeCategory as default };
