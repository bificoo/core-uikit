'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var Select_module = require('./Select.module.scss.js');

var Option = function (_a) {
    var props = _tslib.__rest(_a, []);
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].item, onClick: function (e) {
            return props.onClick && props.onClick(e, { value: props.value, eventKey: props.eventKey });
        } }, { children: props.children }), void 0));
};

exports['default'] = Option;
