import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import styled from '../Select.module.scss.js';

var SelectOption = function (_a) {
    var props = __rest(_a, []);
    return (jsx("div", __assign({ className: styled.item, onClick: function (e) {
            return props.onClick && props.onClick(e, { value: props.value, eventKey: props.eventKey });
        } }, { children: props.children })));
};

export { SelectOption as default };
