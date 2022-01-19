import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './FormMessage.module.scss.js';

var FormMessage = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsx("p", __assign({ className: cx(styled.wrapper, styled[props.variant], className) }, props, { children: props.children }), void 0));
};

export { FormMessage as default };
