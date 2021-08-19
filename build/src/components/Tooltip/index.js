'use strict';

var index = require('./Tooltip/index.js');
var index$1 = require('./TooltipToggle/index.js');
var index$2 = require('./TooltipBody/index.js');

var Tooltip = Object.assign(index, {
    Toggle: index$1,
    Body: index$2,
});

module.exports = Tooltip;
