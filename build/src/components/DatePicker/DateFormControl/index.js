'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../Form/index.js');
var utils = require('../utils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DateFormControl = React__default['default'].forwardRef(function DateFormControl(_a, ref) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, startDate = _a.startDate, endDate = _a.endDate, props = _tslib.__rest(_a, ["dateFormat", "startDate", "endDate"]);
    var value = React.useMemo(function () {
        if ((!startDate && !endDate) || !dateFormat)
            return "";
        var formatStartDate = startDate && utils.formatDate(startDate, dateFormat);
        var formatEndDate = endDate && utils.formatDate(endDate, dateFormat);
        return formatStartDate + " ~ " + (formatEndDate || formatStartDate);
    }, [startDate, endDate, dateFormat]);
    return jsxRuntime.jsx(index['default'].Input, _tslib.__assign({ ref: ref, style: { width: "200px" } }, props, { value: value }), void 0);
});

module.exports = DateFormControl;
