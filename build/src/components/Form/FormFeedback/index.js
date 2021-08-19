import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './FormFeedback.module.scss.js';

var FormFeedback = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsx("p", __assign({ className: cx(styled.wrapper, className) }, props, { children: props.children }), void 0));
};

export { FormFeedback as default };
