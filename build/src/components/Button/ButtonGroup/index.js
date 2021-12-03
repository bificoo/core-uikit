'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ButtonGroup_module = require('./ButtonGroup.module.scss.js');
var ButtonContext = require('../ButtonContext.js');

var ButtonGroup = function (props) {
    var _a = React.useState(props.defaultActiveKey), eventKey = _a[0], setEventKay = _a[1];
    var _b = React.useState(props.defaultActiveKey), selectKey = _b[0], setSelectKey = _b[1];
    var handleClickItem = function (e, _a) {
        var eventKey = _a.eventKey;
        if (!eventKey)
            return;
        setEventKay(eventKey);
        props.onSelect && props.onSelect(e, { eventKey: eventKey });
        setSelectKey(eventKey);
    };
    return (jsxRuntime.jsx(ButtonContext.ButtonContext.Provider, _tslib.__assign({ value: { activeKey: eventKey, setActiveKey: handleClickItem, selectKey: selectKey } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: ButtonGroup_module['default'].outer }, { children: props.children }), void 0) }), void 0));
};

exports['default'] = ButtonGroup;
