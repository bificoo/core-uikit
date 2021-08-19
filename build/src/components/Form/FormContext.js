'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FormContext = React__default['default'].createContext({
    setAttributes: function () {
        // set attributes
    },
});
var FormGroupContext = React__default['default'].createContext({
    setAttributes: function () {
        // set attributes
    },
});

exports.FormGroupContext = FormGroupContext;
exports['default'] = FormContext;
