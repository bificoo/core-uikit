'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../Form/index.js');
var utils = require('../utils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DateFormControl = React__default['default'].forwardRef(function DateFormControl(_a, ref) {
    var { dateFormat = "YYYY-MM-DD", startDate, endDate } = _a, props = _tslib.__rest(_a, ["dateFormat", "startDate", "endDate"]);
    const value = React.useMemo(() => {
        if ((!startDate && !endDate) || !dateFormat)
            return "";
        const formatStartDate = startDate && utils.formatDate(startDate, dateFormat);
        const formatEndDate = endDate && utils.formatDate(endDate, dateFormat);
        return `${formatStartDate} ~ ${formatEndDate || formatStartDate}`;
    }, [startDate, endDate, dateFormat]);
    return jsxRuntime.jsx(index['default'].Input, Object.assign({ ref: ref, style: { width: "200px" } }, props, { value: value }), void 0);
});

exports['default'] = DateFormControl;
