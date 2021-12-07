'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../Button/index.js');
var ButtonGroup_module = require('./ButtonGroup.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ButtonGroup = function (props) {
    var _a = React.useState(props.defaultActiveKey), eventKey = _a[0], setEventKay = _a[1];
    var handleClick = function (e, _a) {
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
    };
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: ButtonGroup_module['default'].outer }, { children: React__default['default'].Children.map(props.children, function (child) {
            if (!React__default['default'].isValidElement(child))
                return;
            if (child.type === index['default']) {
                return React__default['default'].cloneElement(child, _tslib.__assign(_tslib.__assign({}, child.props), { variant: "secondary", selected: child.props.eventKey === eventKey, onClick: handleClick }));
            }
            return null;
        }) }), void 0));
};

exports['default'] = ButtonGroup;
