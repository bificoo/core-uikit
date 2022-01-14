import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from './Breadcrumbs.module.scss.js';

var Breadcrumbs = function (props) {
    return (jsx("div", __assign({ className: styled.wrapper }, { children: jsx("ol", __assign({ className: styled.items }, { children: props.children }), void 0) }), void 0));
};

export { Breadcrumbs as default };
