import { __rest, __assign } from '../../../node_modules/tslib/tslib.es6.js';
import '../../../node_modules/react/jsx-runtime.js';
import '../../../node_modules/react/index.js';
import FormContext from '../FormContext.js';
import { r as react } from '../../../_virtual/index.js_commonjs-module';
import { j as jsxRuntime } from '../../../_virtual/jsx-runtime.js_commonjs-module';

var Form = function (_a) {
    var layout = _a.layout, labelWidth = _a.labelWidth, props = __rest(_a, ["layout", "labelWidth"]);
    var _b = react.exports.useState({
        layout: layout,
        labelWidth: labelWidth,
    }), attributes = _b[0], setAttributes = _b[1];
    var update = function (attributes) {
        setAttributes(function (prev) {
            return __assign(__assign({}, prev), attributes);
        });
    };
    var submit = function (e) {
        e.preventDefault();
        props.onSubmit && props.onSubmit(e);
    };
    return (jsxRuntime.exports.jsx(FormContext.Provider, __assign({ value: { attributes: attributes, setAttributes: update } }, { children: jsxRuntime.exports.jsx("form", __assign({}, props, { onSubmit: submit }, { children: props.children }), void 0) }), void 0));
};

export default Form;
//# sourceMappingURL=index.js.map
