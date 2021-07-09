'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
require('../../../node_modules/react/jsx-runtime.js');
var index = require('../../../node_modules/react/index.js');
var FormContext = require('../FormContext.js');
var index$2 = require('../../../node_modules/classnames/index.js');
var FormTextarea_module = require('./FormTextarea.module.scss.js');
var index$1 = require('../../../_virtual/index.js_commonjs-module');
var jsxRuntime = require('../../../_virtual/jsx-runtime.js_commonjs-module');

var FormTextarea = index['default'].forwardRef(function FormTextarea(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, isValid = _a.isValid, isInvalid = _a.isInvalid, props = tslib_es6.__rest(_a, ["className", "isValid", "isInvalid"]);
    var _c = index$1.react.exports.useContext(FormContext.FormGroupContext), attributes = _c.attributes, setAttributes = _c.setAttributes;
    var _d = index$1.react.exports.useState(false), entered = _d[0], setEntered = _d[1];
    index$1.react.exports.useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: !!props.disabled,
            readOnly: !!props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (jsxRuntime.jsxRuntime.exports.jsx("div", tslib_es6.__assign({ className: index$2['default']("component-textarea", FormTextarea_module['default'].wrapper, (_b = {},
            _b[FormTextarea_module['default'].entered] = entered,
            _b[FormTextarea_module['default'].disabled] = !!props.disabled,
            _b[FormTextarea_module['default']["read-only"]] = !!props.readOnly,
            _b[FormTextarea_module['default']["is-valid"]] = isValid,
            _b[FormTextarea_module['default']["is-invalid"]] = isInvalid,
            _b)) }, { children: jsxRuntime.jsxRuntime.exports.jsx("textarea", tslib_es6.__assign({}, props, { ref: ref, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: index$2['default'](FormTextarea_module['default'].control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

exports.default = FormTextarea;
//# sourceMappingURL=index.js.map
