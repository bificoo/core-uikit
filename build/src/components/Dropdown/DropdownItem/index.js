import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import cx from 'classnames';
import styled from './DropdownItem.module.scss.js';
import { DropdownContext } from '../DropdownContext.js';

var DropdownItem = function (props) {
    var setActiveKey = useContext(DropdownContext).setActiveKey;
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className), onClick: function (e) { return setActiveKey(e, { eventKey: props.eventKey }); } }, { children: props.children }), void 0));
};

export { DropdownItem as default };
