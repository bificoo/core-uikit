import { __assign, __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useContext, useState, useMemo } from 'react';
import Icon from '../../Icon/index.js';
import styled from './TreeCategory.module.scss.js';
import cx from 'classnames';
import { TreeContext } from '../TreeContext.js';

var TreeCategory = function (props) {
    var _a, _b;
    var _c, _d;
    var activeKey = useContext(TreeContext).activeKey;
    var _e = useState(false), expanded = _e[0], setExpanded = _e[1];
    var customChildren = [];
    React__default.Children.forEach(props.children, function (child, index) {
        if (React__default.isValidElement(child)) {
            customChildren.push(React__default.cloneElement(child, __assign(__assign({}, child.props), { nodes: props.nodes && __spreadArray(__spreadArray([], props.nodes, true), [child.props.eventKey], false), key: index })));
        }
    });
    var active = useMemo(function () {
        return activeKey === null || activeKey === void 0 ? void 0 : activeKey.some(function (el) {
            if (el === props.eventKey) {
                setExpanded(true);
                return true;
            }
            return false;
        });
    }, [activeKey, props.eventKey]);
    return (jsxs("div", { children: [jsxs("div", __assign({ className: cx(styled.category, (_a = {},
                    _a[styled.active] = active,
                    _a[styled["first-level"]] = ((_c = props.nodes) === null || _c === void 0 ? void 0 : _c.length) === 1,
                    _a)), style: { paddingLeft: "".concat(((((_d = props.nodes) === null || _d === void 0 ? void 0 : _d.length) || 0) - 1) * 20, "px") }, onClick: function () { return setExpanded(function (prev) { return !prev; }); } }, { children: [jsx(Icon.Arrow, { direction: !expanded ? "up" : "down" }, void 0), props.renderName] }), void 0), jsx("div", __assign({ className: cx(styled.content, (_b = {}, _b[styled.expanded] = expanded, _b)) }, { children: customChildren }), void 0)] }, void 0));
};

export { TreeCategory as default };
