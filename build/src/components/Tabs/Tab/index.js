import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import cx from 'classnames';
import styled from './Tab.module.scss.js';
import TabsContext from '../TabsContext.js';

var Tab = function (_a) {
    var _b;
    var props = __rest(_a, []);
    var _c = useContext(TabsContext), activeKey = _c.activeKey, setActiveKey = _c.setActiveKey;
    return (jsx("div", __assign({ className: cx(styled.wrapper, (_b = {}, _b[styled.active] = props.eventKey === activeKey, _b), props.className), onClick: function () { return setActiveKey(props.eventKey); } }, { children: props.title }), void 0));
};

export { Tab as default };
