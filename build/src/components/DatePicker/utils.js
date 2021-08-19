'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var day = require('../../utils/day.js');

var formatDate = function (date, format) {
    return day(date).format(format);
};
var parseDate = function (str, format) {
    return day(str, format).toDate();
};

exports.formatDate = formatDate;
exports.parseDate = parseDate;
