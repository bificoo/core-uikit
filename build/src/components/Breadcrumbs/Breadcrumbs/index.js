import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default from 'react';
import { Icon } from '../../Icon/index.js';
import styled from './Breadcrumbs.module.scss.js';

var Breadcrumbs = function (props) {
    var childrenLength = React__default.Children.count(props.children);
    return (jsx("ol", __assign({ className: styled.items }, { children: React__default.Children.map(props.children, function (child, i) {
            if (!React__default.isValidElement(child))
                return;
            var isNode = (i < childrenLength - 1);
            return (jsxs(Fragment, { children: [child, isNode && jsx(Icon, { name: "arrow-right", className: styled.icon }, void 0)] }, void 0));
        }) }), void 0));
};

export { Breadcrumbs as default };
