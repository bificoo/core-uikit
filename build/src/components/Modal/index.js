'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./Modal/index.js');
var withOpen = require('./withOpen.js');

var index = Object.assign(index$1["default"], {
    alert: function (config) { return withOpen.open(index$1["default"], withOpen.withAlert(config)); },
    confirm: function (config) { return withOpen.open(index$1["default"], withOpen.withConfirm(config)); },
});

exports["default"] = index;
