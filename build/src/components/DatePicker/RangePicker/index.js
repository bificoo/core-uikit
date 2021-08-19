'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('../../../../node_modules/react-day-picker/lib/react-day-picker.min.js');
var index = require('../../../../node_modules/react-day-picker/DayPickerInput/index.js');
var index$1 = require('../DateFormControl/index.js');
var useOutsideEvent = require('../../../hooks/useOutsideEvent.js');
var utils = require('../utils.js');
var RangePicker_module = require('./RangePicker.module.scss.js');
var reactDayPicker_min = require('../../../../_virtual/react-day-picker.min.js_commonjs-module');

var RangePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = _tslib.__rest(_a, ["dateFormat"]);
    var start = (props === null || props === void 0 ? void 0 : props.startDate) || (props === null || props === void 0 ? void 0 : props.endDate);
    var _c = React.useState(start), startDate = _c[0], setStartDate = _c[1];
    var _d = React.useState(props === null || props === void 0 ? void 0 : props.endDate), endDate = _d[0], setEndDate = _d[1];
    var currentMonth = React.useRef(startDate);
    var datePickerContainerRef = React.useRef(null);
    var datePickerInputRef = React.useRef(null);
    var dayPickerProps = {
        className: RangePicker_module.wrapper,
        numberOfMonths: 2,
        month: startDate,
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        selectedDays: [startDate, { from: startDate, to: endDate }],
        modifiers: {
            start: startDate,
            end: endDate,
        },
        onDayClick: function (date, _a) {
            _a.selected; var disabled = _a.disabled;
            if (disabled)
                return;
            var range = reactDayPicker_min.reactDayPicker_min.exports.DateUtils.addDayToRange(date, {
                from: startDate,
                to: endDate,
            });
            range.from !== null && setStartDate(range.from);
            range.to !== null && setEndDate(range.to);
            props.onChange && props.onChange(range.from, range.to);
        },
        onMonthChange: function (date) {
            currentMonth.current = date;
        },
    };
    if (props === null || props === void 0 ? void 0 : props.maxDate) {
        dayPickerProps.disabledDays = {
            after: props.maxDate,
        };
    }
    if (props === null || props === void 0 ? void 0 : props.minDate) {
        dayPickerProps.disabledDays = _tslib.__assign(_tslib.__assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    var handleDayChange = React.useCallback(function () {
        var _a;
        (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.setState({ month: currentMonth.current });
    }, [startDate]);
    useOutsideEvent({
        refs: [datePickerContainerRef],
        onClickOutside: function () {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    React.useEffect(function () {
        setStartDate(props.startDate);
    }, [props.startDate]);
    React.useEffect(function () {
        setEndDate(props.endDate);
    }, [props.endDate]);
    return (jsxRuntime.jsx("div", _tslib.__assign({ ref: datePickerContainerRef }, { children: jsxRuntime.jsx(index, { ref: datePickerInputRef, classNames: {
                container: RangePicker_module.container,
                overlay: RangePicker_module.overlay,
                overlayWrapper: RangePicker_module.overlayWrapper,
            }, value: startDate, format: dateFormat, formatDate: utils.formatDate, parseDate: utils.parseDate, placeholder: props.placeholder ||
                utils.formatDate(new Date(), dateFormat) + " ~ " + utils.formatDate(new Date(), dateFormat), hideOnDayClick: false, component: function (props) { return (jsxRuntime.jsx(index$1, _tslib.__assign({ startDate: startDate, endDate: endDate, dateFormat: dateFormat }, props), void 0)); }, dayPickerProps: dayPickerProps, onDayChange: handleDayChange }, void 0) }), void 0));
};

module.exports = RangePicker;
