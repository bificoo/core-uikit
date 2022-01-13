import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './BreadcrumbsItem.module.scss.js';

var BreadcrumbsItem = function (_a) {
    var _b;
    var href = _a.href, children = _a.children;
    return (jsx("li", __assign({ className: styled.wrapper }, { children: jsx("a", __assign({ className: cx(styled.text, (_b = {}, _b[styled.active] = !href, _b)), href: href }, { children: children }), void 0) }), void 0));
};

export { BreadcrumbsItem as default };
