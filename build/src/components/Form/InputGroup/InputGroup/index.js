'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../../FormContext.js');
var InputGroup_module = require('./InputGroup.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const InputGroup = (props) => {
    const { attributes } = React.useContext(FormContext.FormGroupContext);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](InputGroup_module['default'].wrapper, {
            [InputGroup_module['default'].entered]: attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            [InputGroup_module['default'].disabled]: attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            [InputGroup_module['default']["read-only"]]: attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
            [InputGroup_module['default']["is-valid"]]: attributes === null || attributes === void 0 ? void 0 : attributes.isValid,
            [InputGroup_module['default']["is-invalid"]]: attributes === null || attributes === void 0 ? void 0 : attributes.isInvalid,
        }, props.className) }, { children: props.children }), void 0));
};

exports['default'] = InputGroup;
