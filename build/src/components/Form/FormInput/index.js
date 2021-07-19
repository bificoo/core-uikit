'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');
var index = require('../../../../node_modules/classnames/index.js');
var FormInput_module = require('./FormInput.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FormInput = React__default['default'].forwardRef(function FormInput(_a, ref) {
    var _b;
    if (ref === void 0) { ref = null; }
    var className = _a.className, _c = _a.type, type = _c === void 0 ? "text" : _c, isValid = _a.isValid, isInvalid = _a.isInvalid, props = tslib_es6.__rest(_a, ["className", "type", "isValid", "isInvalid"]);
    var _d = React.useContext(FormContext.FormGroupContext), attributes = _d.attributes, setAttributes = _d.setAttributes;
    var _e = React.useState(false), entered = _e[0], setEntered = _e[1];
    React.useEffect(function () {
        setAttributes({
            entered: entered,
            isValid: isValid,
            isInvalid: isInvalid,
            disabled: props.disabled,
            readOnly: props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ className: index['default']("component-input", FormInput_module['default'].wrapper, (_b = {},
            _b[FormInput_module['default'].entered] = entered,
            _b[FormInput_module['default'].disabled] = !!props.disabled,
            _b[FormInput_module['default']["read-only"]] = !!props.readOnly,
            _b[FormInput_module['default']["is-valid"]] = isValid,
            _b[FormInput_module['default']["is-invalid"]] = isInvalid,
            _b)) }, { children: jsxRuntime.jsx("input", tslib_es6.__assign({}, props, { ref: ref, type: type, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: index['default'](FormInput_module['default'].control, className), onChange: function (e) {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

exports.default = FormInput;
