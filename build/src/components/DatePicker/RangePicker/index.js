'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

const RangePicker = (_a) => {
    var { dateFormat = "YYYY-MM-DD" } = _a, props = _tslib.__rest(_a, ["dateFormat"]);
    const start = (props === null || props === void 0 ? void 0 : props.startDate) || (props === null || props === void 0 ? void 0 : props.endDate);
    const [startDate, setStartDate] = React.useState(start);
    const [endDate, setEndDate] = React.useState(props === null || props === void 0 ? void 0 : props.endDate);
    const currentMonth = React.useRef(startDate);
    const datePickerContainerRef = React.useRef(null);
    const datePickerInputRef = React.useRef(null);
    const dayPickerProps = {
        className: RangePicker_module['default'].wrapper,
        numberOfMonths: 2,
        month: startDate,
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        selectedDays: [startDate, { from: startDate, to: endDate }],
        modifiers: {
            start: startDate,
            end: endDate,
        },
        onDayClick: (date, { selected, disabled }) => {
            if (disabled)
                return;
            const range = reactDayPicker_min.reactDayPicker_min.exports.DateUtils.addDayToRange(date, {
                from: startDate,
                to: endDate,
            });
            range.from !== null && setStartDate(range.from);
            range.to !== null && setEndDate(range.to);
            props.onChange && props.onChange(range.from, range.to);
        },
        onMonthChange: date => {
            currentMonth.current = date;
        },
    };
    if (props === null || props === void 0 ? void 0 : props.maxDate) {
        dayPickerProps.disabledDays = {
            after: props.maxDate,
        };
    }
    if (props === null || props === void 0 ? void 0 : props.minDate) {
        dayPickerProps.disabledDays = Object.assign(Object.assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    const handleDayChange = React.useCallback(() => {
        var _a;
        (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.setState({ month: currentMonth.current });
    }, [startDate]);
    useOutsideEvent['default']({
        refs: [datePickerContainerRef],
        onClickOutside: () => {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    React.useEffect(() => {
        setStartDate(props.startDate);
    }, [props.startDate]);
    React.useEffect(() => {
        setEndDate(props.endDate);
    }, [props.endDate]);
    return (jsxRuntime.jsx("div", Object.assign({ ref: datePickerContainerRef }, { children: jsxRuntime.jsx(index['default'], { ref: datePickerInputRef, classNames: {
                container: RangePicker_module['default'].container,
                overlay: RangePicker_module['default'].overlay,
                overlayWrapper: RangePicker_module['default'].overlayWrapper,
            }, value: startDate, format: dateFormat, formatDate: utils.formatDate, parseDate: utils.parseDate, placeholder: props.placeholder ||
                `${utils.formatDate(new Date(), dateFormat)} ~ ${utils.formatDate(new Date(), dateFormat)}`, hideOnDayClick: false, component: (props) => (jsxRuntime.jsx(index$1['default'], Object.assign({ startDate: startDate, endDate: endDate, dateFormat: dateFormat }, props), void 0)), dayPickerProps: dayPickerProps, onDayChange: handleDayChange }, void 0) }), void 0));
};

exports['default'] = RangePicker;
