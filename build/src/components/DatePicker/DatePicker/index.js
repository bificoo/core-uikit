import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import DayPickerInput from '../../../../node_modules/react-day-picker/DayPickerInput/index.js';
import Form from '../../Form/index.js';
import useOutsideEvent from '../../../hooks/useOutsideEvent.js';
import day from '../../../utils/day.js';
import { formatDate, parseDate } from '../utils.js';
import styled from './DatePicker.module.scss.js';

var DatePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = __rest(_a, ["dateFormat"]);
    var _c = useState(props.date || new Date()), date = _c[0], setDate = _c[1];
    var datePickerContainerRef = useRef(null);
    var datePickerInputRef = useRef(null);
    var dayPickerProps = {
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        onDayClick: function (date, _a) {
            _a.selected; var disabled = _a.disabled;
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
    useOutsideEvent({
        refs: [datePickerContainerRef],
        onClickOutside: function () {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    useEffect(function () {
        setDate(props.date);
    }, [props.date]);
    return (jsx("div", __assign({ ref: datePickerContainerRef }, { children: jsx(DayPickerInput, { ref: datePickerInputRef, classNames: {
                container: styled.container,
                overlay: styled.overlay,
                overlayWrapper: styled.overlayWrapper,
            }, value: date, format: dateFormat, formatDate: formatDate, parseDate: parseDate, hideOnDayClick: false, placeholder: props.placeholder || day(new Date()).format(dateFormat), component: function (props) { return jsx(Form.Input, __assign({}, props), void 0); }, dayPickerProps: dayPickerProps }, void 0) }), void 0));
};

export { DatePicker as default };
