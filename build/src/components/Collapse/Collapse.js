'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var CollapseContext = require('./CollapseContext.js');

var Collapse = function (props) {
    var _a = React.useState(props.defaultExpanded), expanded = _a[0], setExpended = _a[1];
    return (jsxRuntime.jsx(CollapseContext.CollapseContext.Provider, _tslib.__assign({ value: {
            expanded: expanded || false,
            setExpended: function (expanded) {
                setExpended(expanded);
            },
        } }, { children: jsxRuntime.jsx("div", { children: props.children }, void 0) }), void 0));
};

exports['default'] = Collapse;
