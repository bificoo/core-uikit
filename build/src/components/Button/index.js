'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./Button/index.js');
var index$2 = require('./ButtonGroup/index.js');
require('react/jsx-runtime');
require('classnames');
require('./LinkButton/LinkButton.module.scss.js');

var Button = Object.assign(index$1['default'], {
    Group: index$2['default'],
});

exports['default'] = Button;
