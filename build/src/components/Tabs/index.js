'use strict';

var index = require('./Tabs/index.js');
var index$1 = require('./Tab/index.js');

var Tabs = Object.assign(index, {
    Tab: index$1,
});

module.exports = Tabs;
