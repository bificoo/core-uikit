import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import Image from './svg/index.js';
import cx from 'classnames';
import styled from './Icon.module.scss.js';

var Icon = function (props) {
    var _a;
    var camelCased = props.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    var compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
    var compareIcon = {
        'ArrowUp': jsx(Image.ArrowUp, {}, void 0),
        'ArrowDown': jsx(Image.ArrowDown, {}, void 0),
        'ArrowLeft': jsx(Image.ArrowLeft, {}, void 0),
        'ArrowRight': jsx(Image.ArrowRight, {}, void 0),
        'Search': jsx(Image.Search, {}, void 0),
        'Group': jsx(Image.Group, {}, void 0),
        'Information': jsx(Image.Information, {}, void 0),
        'Cross': jsx(Image.Cross, {}, void 0),
        'Calendar': jsx(Image.Calendar, {}, void 0)
    };
    return (jsx("div", __assign({ className: cx((_a = {}, _a[styled.arrowWrapper] = compName.includes("Arrow"), _a), props.className), style: __assign({ display: "flex" }, props.style) }, { children: compareIcon[compName] }), void 0));
};

export { Icon, Icon as default };
