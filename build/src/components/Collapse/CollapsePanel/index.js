import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from './CollapsePanel.module.scss.js';
import { useContext } from 'react';
import { CollapseContext } from '../CollapseContext.js';
import cx from 'classnames';

var CollapsePanel = function (props) {
    var _a;
    var expanded = useContext(CollapseContext).expanded;
    return (jsx("div", __assign({ className: cx(props.className, styled.wrapper, (_a = {},
            _a[styled.expanded] = expanded,
            _a)), style: props.style }, { children: props.children }), void 0));
};

export { CollapsePanel as default };
