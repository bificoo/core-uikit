import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useState, useRef, useEffect } from 'react';
import Form from '../../Form/index.js';
import day from '../../../utils/day.js';
import { formatDate, parseDate } from '../utils.js';
import styled from './DatePicker.module.scss.js';
import DayPickerInput$1 from '../../../../node_modules/react-day-picker/DayPickerInput/index.js';

// @ts-ignore
var DayPickerInput = DayPickerInput$1.__esModule ? DayPickerInput$1.default : DayPickerInput$1;
var DatePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = __rest(_a, ["dateFormat"]);
    var _c = useState(props.date || new Date()), date = _c[0], setDate = _c[1];
    var datePickerInputRef = useRef(null);
    var dayPickerProps = {
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        onDayClick: function (date, _a) {
            var disabled = _a.disabled;
            if (disabled)
                return;
            setDate(date);
            (props === null || props === void 0 ? void 0 : props.onChange) && props.onChange(date);
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
    useEffect(function () {
        setDate(props.date);
    }, [props.date]);
    return (jsx("div", { children: jsx(DayPickerInput, { classNames: {
                container: styled.container,
                overlay: styled.overlay,
                overlayWrapper: styled.overlayWrapper,
            }, style: { width: "250px" }, value: date, format: dateFormat, formatDate: formatDate, parseDate: parseDate, placeholder: props.placeholder || day(new Date()).format(dateFormat), component: React__default.forwardRef(function FormInput(props, ref) {
                return jsx(Form.Input, __assign({ ref: ref }, props), void 0);
            }), dayPickerProps: dayPickerProps, inputProps: {
                ref: datePickerInputRef,
                readOnly: true,
                disabled: props.disabled,
                style: {
                    cursor: "pointer",
                },
            } }, void 0) }, void 0));
};
DatePicker.display = DatePicker;

export { DatePicker as default };
