import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { TreeContext } from '../TreeContext.js';

var Tree = function (_a) {
    var expanded = _a.expanded, selected = _a.selected, onNodeToggle = _a.onNodeToggle, onNodeSelect = _a.onNodeSelect, children = _a.children;
    return (jsx(TreeContext.Provider, __assign({ value: {
            expanded: expanded,
            selected: selected,
            onNodeToggle: onNodeToggle,
            onNodeSelect: onNodeSelect,
        } }, { children: React__default.Children.map(children, function (child, index) {
            if (React__default.isValidElement(child)) {
                return React__default.cloneElement(child, __assign(__assign({}, child.props), { key: index }));
            }
        }) }), void 0));
};

export { Tree as default };
