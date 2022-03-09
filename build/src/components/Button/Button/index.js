import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './Button.module.scss.js';

var Button = function (_a) {
    var _b, _c;
    var _d = _a.variant, variant = _d === void 0 ? "primary" : _d, _e = _a.selected, selected = _e === void 0 ? false : _e, _f = _a.block, block = _f === void 0 ? false : _f, className = _a.className, _g = _a.children, children = _g === void 0 ? "Click" : _g, eventKey = _a.eventKey, onClick = _a.onClick, props = __rest(_a, ["variant", "selected", "block", "className", "children", "eventKey", "onClick"]);
    return (jsx("button", __assign({ className: cx("core-uikit-button", styled.wrapper, styled[variant], (_b = {}, _b[styled.block] = block, _b), (_c = {}, _c[styled.selected] = selected, _c), className), style: props.style, onClick: function (e) {
            onClick && onClick(e, { eventKey: eventKey });
        } }, props, { children: children })));
};

export { Button };
