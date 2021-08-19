'use strict';

var index = require('./Dropdown/index.js');
var index$1 = require('./DropdownToggle/index.js');
var index$2 = require('./DropdownMenu/index.js');
var index$3 = require('./DropdownItem/index.js');

var Dropdown = Object.assign(index, {
    Toggle: index$1,
    Menu: index$2,
    Item: index$3,
});

module.exports = Dropdown;
