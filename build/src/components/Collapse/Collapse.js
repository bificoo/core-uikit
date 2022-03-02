import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { CollapseContext } from './CollapseContext.js';

var Collapse = function (_a) {
    var _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? false : _b, props = __rest(_a, ["defaultExpanded"]);
    var _c = useState(defaultExpanded), expanded = _c[0], setExpanded = _c[1];
    return (jsx(CollapseContext.Provider, __assign({ value: {
            expanded: expanded || false,
            setExpanded: function (expanded) {
                setExpanded(expanded);
            },
        } }, { children: jsx("div", __assign({ className: props.className, style: props.style }, { children: props.children })) })));
};

export { Collapse as default };
