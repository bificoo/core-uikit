'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../FormContext.js');
var cx = require('classnames');
var FormTextarea_module = require('./FormTextarea.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const FormTextarea = React__default['default'].forwardRef(function FormTextarea(_a, ref = null) {
    var { className, isValid, isInvalid } = _a, props = _tslib.__rest(_a, ["className", "isValid", "isInvalid"]);
    const { attributes, setAttributes } = React.useContext(FormContext.FormGroupContext);
    const [entered, setEntered] = React.useState(false);
    React.useEffect(() => {
        setAttributes({
            entered,
            isValid,
            isInvalid,
            disabled: !!props.disabled,
            readOnly: !!props.readOnly,
        });
    }, [entered, isValid, isInvalid, props.disabled, props.readOnly]);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default']("component-textarea", FormTextarea_module['default'].wrapper, {
            [FormTextarea_module['default'].entered]: entered,
            [FormTextarea_module['default'].disabled]: !!props.disabled,
            [FormTextarea_module['default']["read-only"]]: !!props.readOnly,
            [FormTextarea_module['default']["is-valid"]]: isValid,
            [FormTextarea_module['default']["is-invalid"]]: isInvalid,
        }) }, { children: jsxRuntime.jsx("textarea", Object.assign({}, props, { ref: ref, id: attributes === null || attributes === void 0 ? void 0 : attributes.formId, className: cx__default['default'](FormTextarea_module['default'].control, className), onChange: e => {
                if (e.target.value.trim() === "")
                    setEntered(false);
                else
                    setEntered(true);
                props.onChange && props.onChange(e);
            } }), void 0) }), void 0));
});

exports['default'] = FormTextarea;
