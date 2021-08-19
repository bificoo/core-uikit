'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const FormContext = React__default['default'].createContext({
    setAttributes: () => {
        // set attributes
    },
});
const FormGroupContext = React__default['default'].createContext({
    setAttributes: () => {
        // set attributes
    },
});

exports.FormGroupContext = FormGroupContext;
exports['default'] = FormContext;
