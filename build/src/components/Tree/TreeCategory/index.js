import { __assign, __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useContext, useState } from 'react';
import Icon from '../../Icon/index.js';
import styled from './TreeCategory.module.scss.js';
import cx from 'classnames';
import { TreeContext } from '../TreeContext.js';

var TreeCategory = function (props) {
    var _a, _b;
    var _c, _d;
    var _e = useContext(TreeContext), selected = _e.selected, expanded = _e.expanded, onNodeToggle = _e.onNodeToggle;
    var _f = useState(expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; })), setSelfExpanded = _f[1];
    return (jsxs("div", __assign({ className: styled.wrapper }, { children: [jsxs("div", __assign({ className: cx(styled.category, (_a = {},
                    _a[styled.active] = selected === null || selected === void 0 ? void 0 : selected.some(function (el) { return el === props.eventKey; }),
                    _a[styled["first-level"]] = ((_c = props.nodes) === null || _c === void 0 ? void 0 : _c.length) === 1,
                    _a)), style: { paddingLeft: "".concat(((((_d = props.nodes) === null || _d === void 0 ? void 0 : _d.length) || 0) - 1) * 20, "px") }, onClick: function () {
                    setSelfExpanded(function (prev) {
                        var result = expanded || [];
                        if (!prev)
                            result.push(props.eventKey);
                        else {
                            var index = result.indexOf(props.eventKey);
                            result.splice(index, 1);
                        }
                        onNodeToggle(result);
                        return !prev;
                    });
                } }, { children: [jsx(Icon.Arrow, { direction: (expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; })) ? "down" : "right" }, void 0), jsx("div", __assign({ className: styled.name }, { children: props.renderName }), void 0)] }), void 0), jsx("div", __assign({ className: cx(styled.content, (_b = {}, _b[styled.expanded] = expanded === null || expanded === void 0 ? void 0 : expanded.some(function (el) { return el === props.eventKey; }), _b)) }, { children: React__default.Children.map(props.children, function (child, index) {
                    if (React__default.isValidElement(child)) {
                        return React__default.cloneElement(child, __assign(__assign({}, child.props), { nodes: props.nodes && __spreadArray(__spreadArray([], props.nodes, true), [child.props.eventKey], false), key: index }));
                    }
                }) }), void 0)] }), void 0));
};

export { TreeCategory as default };
