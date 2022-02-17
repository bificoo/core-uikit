import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext, useEffect } from 'react';
import { DropdownContext } from '../DropdownContext.js';
import cx from 'classnames';
import styled from './DropdownMenu.module.scss.js';

var DropdownMenu = function (props) {
    var handlePopupClose = useContext(DropdownContext).handlePopupClose;
    useEffect(function () {
        if (props.onClose)
            handlePopupClose();
    }, [props.onClose, handlePopupClose]);
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: props.children }), void 0));
};

export { DropdownMenu as default };
