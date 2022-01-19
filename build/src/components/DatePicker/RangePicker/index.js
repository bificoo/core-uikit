import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import '../../../../node_modules/react-day-picker/lib/react-day-picker.min.js';
import DateFormControl from '../DateFormControl/index.js';
import useOutsideEvent from '../../../hooks/useOutsideEvent.js';
import { formatDate, parseDate } from '../utils.js';
import styled from './RangePicker.module.scss.js';
import DayPickerInput$1 from '../../../../node_modules/react-day-picker/DayPickerInput/index.js';
import { r as reactDayPicker_min } from '../../../../_virtual/react-day-picker.min.js_commonjs-module.js';

// @ts-ignore
var DayPickerInput = DayPickerInput$1.__esModule ? DayPickerInput$1.default : DayPickerInput$1;
var RangePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = __rest(_a, ["dateFormat"]);
    var start = (props === null || props === void 0 ? void 0 : props.startDate) || (props === null || props === void 0 ? void 0 : props.endDate);
    var _c = useState(start), startDate = _c[0], setStartDate = _c[1];
    var _d = useState(props === null || props === void 0 ? void 0 : props.endDate), endDate = _d[0], setEndDate = _d[1];
    var currentMonth = useRef(startDate);
    var datePickerContainerRef = useRef(null);
    var datePickerInputRef = useRef(null);
    var dayPickerProps = {
        className: styled.wrapper,
        numberOfMonths: 2,
        month: startDate,
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        selectedDays: [startDate, { from: startDate, to: endDate }],
        modifiers: {
            start: startDate,
            end: endDate,
        },
        onDayClick: function (date, _a) {
            var disabled = _a.disabled;
            if (disabled)
                return;
            var range = reactDayPicker_min.exports.DateUtils.addDayToRange(date, {
                from: startDate,
                to: endDate,
            });
            range.from !== null && setStartDate(range.from);
            range.to !== null && setEndDate(range.to);
            if (range.from && range.to)
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
        dayPickerProps.disabledDays = __assign(__assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    var handleDayChange = useCallback(function () {
        var _a;
        (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.setState({ month: currentMonth.current });
    }, []);
    useOutsideEvent({
        refs: [datePickerContainerRef],
        onClickOutside: function () {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    useEffect(function () {
        setStartDate(props.startDate);
    }, [props.startDate]);
    useEffect(function () {
        setEndDate(props.endDate);
    }, [props.endDate]);
    return (jsx("div", __assign({ ref: datePickerContainerRef }, { children: jsx(DayPickerInput, { ref: datePickerInputRef, classNames: {
                container: styled.container,
                overlay: styled.overlay,
                overlayWrapper: styled.overlayWrapper,
            }, value: startDate, format: dateFormat, formatDate: formatDate, parseDate: parseDate, placeholder: props.placeholder ||
                "".concat(formatDate(new Date(), dateFormat), " ~ ").concat(formatDate(new Date(), dateFormat)), hideOnDayClick: false, component: function (props) { return (jsx(DateFormControl, __assign({ startDate: startDate, endDate: endDate, dateFormat: dateFormat }, props), void 0)); }, dayPickerProps: dayPickerProps, onDayChange: handleDayChange }, void 0) }), void 0));
};
RangePicker.display = RangePicker;

export { RangePicker as default };
