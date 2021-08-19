'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormContext = require('../../FormContext.js');
var Append_module = require('./Append.module.scss.js');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const Append = (props) => {
    const { attributes } = React.useContext(FormContext.FormGroupContext);
    return (jsxRuntime.jsx("div", Object.assign({ className: cx__default['default'](Append_module['default'].wrapper, {
            [Append_module['default'].entered]: attributes === null || attributes === void 0 ? void 0 : attributes.entered,
            [Append_module['default'].disabled]: attributes === null || attributes === void 0 ? void 0 : attributes.disabled,
            [Append_module['default']["read-only"]]: attributes === null || attributes === void 0 ? void 0 : attributes.readOnly,
        }, props.className) }, { children: props.children }), void 0));
};

exports['default'] = Append;
