'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./Tooltip/index.js');
var index$1 = require('./TooltipToggle/index.js');
var index$2 = require('./TooltipBody/index.js');

var Tooltip = Object.assign(index["default"], {
    Toggle: index$1["default"],
    Body: index$2["default"],
});

exports["default"] = Tooltip;
