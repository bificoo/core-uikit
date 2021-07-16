import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import cx from '../../../node_modules/classnames/index.js';
import styled from './Item.module.scss.js';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var DropdownItem = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, eventKey = _a.eventKey, active = _a.active, onClick = _a.onClick;
    return (jsxRuntime.exports.jsx("div", __assign({ className: cx(styled.wrapper, (_b = {}, _b[styled.active] = active, _b), className), onClick: function (e) { return onClick && onClick(e, { eventKey: eventKey }); } }, { children: children }), void 0));
};

export default DropdownItem;
//# sourceMappingURL=index.js.map
