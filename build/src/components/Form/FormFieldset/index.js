import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';
import styled from './FormFieldset.module.scss.js';

var FormFieldset = function (_a) {
    var _b;
    var _c = _a.inline, inline = _c === void 0 ? false : _c, className = _a.className, props = __rest(_a, ["inline", "className"]);
    return (jsx("fieldset", __assign({ className: cx(styled.wrapper, (_b = {}, _b[styled.inline] = inline, _b), className) }, props, { children: props.children })));
};

export { FormFieldset as default };
