import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import cx from 'classnames';
import styled from './Tab.module.scss.js';
import TabsContext from '../TabsContext.js';

var Tab = function (props) {
    var _a;
    var _b = useContext(TabsContext), activeKey = _b.activeKey, setActiveKey = _b.setActiveKey;
    return (jsx("div", __assign({ className: cx(styled.wrapper, (_a = {}, _a[styled.active] = props.eventKey === activeKey, _a), props.className), onClick: function (e) {
            setActiveKey(e, { eventKey: props.eventKey });
        } }, { children: props.title }), void 0));
};
Tab.display = Tab;

export { Tab as default };
