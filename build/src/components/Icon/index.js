import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import Image from './svg/index.js';
import cx from 'classnames';
import styled from './Icon.module.scss.js';

var Icon = function (props) {
    var _a;
    var camelCased = props.type.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    var compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
    var filterIcon = useMemo(function () {
        switch (compName) {
            case 'ArrowUp':
                return jsx(Image.ArrowUp, {}, void 0);
            case 'ArrowDown':
                return jsx(Image.ArrowDown, {}, void 0);
            case 'ArrowLeft':
                return jsx(Image.ArrowLeft, {}, void 0);
            case 'ArrowRight':
                return jsx(Image.ArrowRight, {}, void 0);
            case 'Search':
                return jsx(Image.Search, {}, void 0);
            case 'Group':
                return jsx(Image.Group, {}, void 0);
            case 'User':
                return jsx(Image.User, {}, void 0);
            case 'Information':
                return jsx(Image.Information, {}, void 0);
            default:
                return null;
        }
    }, [compName]);
    return (jsx("div", __assign({ className: cx((_a = {}, _a[styled.arrowWrapper] = compName.includes("Arrow"), _a), props.className), style: __assign({ display: "flex" }, props.style) }, { children: filterIcon }), void 0));
};

export { Icon, Icon as default };
