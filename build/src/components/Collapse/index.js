'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Collapse$1 = require('./Collapse.js');
var index = require('./CollapseHeader/index.js');
var index$1 = require('./CollapsePanel/index.js');

var Collapse = Object.assign(Collapse$1['default'], {
    Header: index['default'],
    Panel: index$1['default'],
});

exports['default'] = Collapse;
