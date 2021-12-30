'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../Icon/index.js');
var index$1 = require('../Button/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var IconButton = function (props) {
    var iconConfig = { leftIcon: false, rightIcon: false };
    React__default["default"].Children.forEach(props.children, function (child, index$1) {
        if (!React__default["default"].isValidElement(child))
            return;
        if (child.type === index["default"].Arrow) {
            if (index$1 === 0)
                iconConfig.leftIcon = true;
            else
                iconConfig.rightIcon = true;
        }
    });
    var customChildren = [];
    React__default["default"].Children.forEach(props.children, function (child, index$1) {
        if (React__default["default"].isValidElement(child) && child.type === index["default"].Arrow) {
            customChildren.push(React__default["default"].cloneElement(child, _tslib.__assign(_tslib.__assign({}, child.props), { style: index$1 === 0 ? { marginRight: "4px" } : { marginLeft: "4px" } })));
        }
        else if (child) {
            customChildren.push(child);
        }
    });
    return (jsxRuntime.jsx(index$1["default"], _tslib.__assign({ style: _tslib.__assign(_tslib.__assign({}, (iconConfig.leftIcon && { paddingLeft: "8px" })), (iconConfig.rightIcon && { paddingRight: "8px" })) }, props, { children: customChildren }), void 0));
};

exports["default"] = IconButton;
