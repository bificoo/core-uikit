'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index = require('../../../node_modules/react/index.js');
var FormContext = require('../FormContext.js');
var index$2 = require('../../../node_modules/classnames/index.js');
var FormInput_module = require('./FormInput.module.scss.js');
var index$1 = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var FormInput = index['default'].forwardRef(function FormInput(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, _c = _a.type, type = _c === void 0 ? "text" : _c, isValid = _a.isValid, isInvalid = _a.isInvalid, props = tslib_es6.__rest(_a, ["className", "type", "isValid", "isInvalid"]);
    var _d = index$1.react.exports.useContext(FormContext.FormGroupContext), attributes = _d.attributes, setAttributes = _d.setAttributes;
    var _e = index$1.react.exports.useState(false), entered = _e[0], setEntered = _e[1];
    index$1.react.exports.useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: props.disabled,
            readOnly: props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: index$2['default']("component-input", FormInput_module['default'].wrapper, (_b = {},
            _b[FormInput_module['default'].entered] = entered,
            _b[FormInput_module['default'].disabled] = !!props.disabled,
            _b[FormInput_module['default']["read-only"]] = !!props.readOnly,
            _b[FormInput_module['default']["is-valid"]] = isValid,
            _b[FormInput_module['default']["is-invalid"]] = isInvalid,
            _b)) }, { children: jsxRuntime.jsxRuntime.exports.jsx("input", tslib_es6.__assign({}, props, { ref: ref, type: type, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: index$2['default'](FormInput_module['default'].control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

exports.default = FormInput;
//# sourceMappingURL=index.js.map
