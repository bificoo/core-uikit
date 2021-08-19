'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var day = require('../../utils/day.js');

const formatDate = (date, format) => {
    return day['default'](date).format(format);
};
const parseDate = (str, format) => {
    return day['default'](str, format).toDate();
};

exports.formatDate = formatDate;
exports.parseDate = parseDate;
