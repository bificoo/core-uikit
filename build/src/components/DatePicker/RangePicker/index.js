'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('../../../../node_modules/react-day-picker/build/index.js');
var index = require('../../../../node_modules/react-day-picker/DayPickerInput/index.js');
var index$1 = require('../DateFormControl/index.js');
var useOutsideEvent = require('../../../hooks/useOutsideEvent.js');
var utils = require('../utils.js');
var RangePicker_module = require('./RangePicker.module.scss.js');
var index$2 = require('../../../../_virtual/index.js_commonjs-exports');

var RangePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = tslib_es6.__rest(_a, ["dateFormat"]);
    var start = (props === null || props === void 0 ? void 0 : props.startDate) || (props === null || props === void 0 ? void 0 : props.endDate);
    var _c = React.useState(start), startDate = _c[0], setStartDate = _c[1];
    var _d = React.useState(props === null || props === void 0 ? void 0 : props.endDate), endDate = _d[0], setEndDate = _d[1];
    var currentMonth = React.useRef(startDate);
    var datePickerContainerRef = React.useRef(null);
    var datePickerInputRef = React.useRef(null);
    var dayPickerProps = {
        className: RangePicker_module['default'].wrapper,
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
            var range = index$2.__exports.DateUtils.addDayToRange(date, {
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
        dayPickerProps.disabledDays = tslib_es6.__assign(tslib_es6.__assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    var handleDayChange = React.useCallback(function () {
        var _a;
        (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.setState({ month: currentMonth.current });
    }, [startDate]);
    useOutsideEvent['default']({
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
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ ref: datePickerContainerRef }, { children: jsxRuntime.jsx(index['default'], { ref: datePickerInputRef, classNames: {
                container: RangePicker_module['default'].container,
                overlay: RangePicker_module['default'].overlay,
                overlayWrapper: RangePicker_module['default'].overlayWrapper,
            }, value: startDate, format: dateFormat, formatDate: utils.formatDate, parseDate: utils.parseDate, placeholder: props.placeholder ||
                utils.formatDate(new Date(), dateFormat) + " ~ " + utils.formatDate(new Date(), dateFormat), hideOnDayClick: false, component: function (props) { return (jsxRuntime.jsx(index$1['default'], tslib_es6.__assign({ startDate: startDate, endDate: endDate, dateFormat: dateFormat }, props), void 0)); }, dayPickerProps: dayPickerProps, onDayChange: handleDayChange }, void 0) }), void 0));
};

exports['default'] = RangePicker;
