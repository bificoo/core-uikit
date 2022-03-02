import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import Image from './svg/index.js';
import cx from 'classnames';
import styled from './Icon.module.scss.js';

var Icon = function (props) {
    var _a;
    var camelCased = props.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    var compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
    var compareIcon = {
        'ArrowUp': jsx(Image.ArrowUp, {}),
        'ArrowDown': jsx(Image.ArrowDown, {}),
        'ArrowLeft': jsx(Image.ArrowLeft, {}),
        'ArrowRight': jsx(Image.ArrowRight, {}),
        'Search': jsx(Image.Search, {}),
        'Group': jsx(Image.Group, {}),
        'Information': jsx(Image.Information, {}),
        'Cross': jsx(Image.Cross, {}),
        'Calendar': jsx(Image.Calendar, {}),
        'UpTriangle': jsx(Image.UpTriangle, {}),
        'DownTriangle': jsx(Image.DownTriangle, {}),
        'Dash': jsx(Image.Dash, {}),
        'Shortcut': jsx(Image.Shortcut, {}),
    };
    return (jsx("div", __assign({ className: cx((_a = {}, _a[styled.arrowWrapper] = compName.includes("Arrow"), _a), props.className), style: __assign({ display: "flex" }, props.style) }, { children: React__default.cloneElement(compareIcon[compName], __assign(__assign({}, (props.width && { width: props.width })), (props.height && { height: props.height }))) })));
};

export { Icon, Icon as default };
