'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../../../node_modules/react-day-picker/DayPickerInput/index.js');
var index$1 = require('../../Form/index.js');
var useOutsideEvent = require('../../../hooks/useOutsideEvent.js');
var day = require('../../../utils/day.js');
var utils = require('../utils.js');
var DatePicker_module = require('./DatePicker.module.scss.js');

var DatePicker = function (_a) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, props = tslib_es6.__rest(_a, ["dateFormat"]);
    var _c = React.useState(props.date || new Date()), date = _c[0], setDate = _c[1];
    var datePickerContainerRef = React.useRef(null);
    var datePickerInputRef = React.useRef(null);
    var dayPickerProps = {
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        onDayClick: function (date, _a) {
            var selected = _a.selected, disabled = _a.disabled;
            if (selected || disabled)
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
        dayPickerProps.disabledDays = tslib_es6.__assign(tslib_es6.__assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    useOutsideEvent['default']({
        refs: [datePickerContainerRef],
        onClickOutside: function () {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    React.useEffect(function () {
        setDate(props.date);
    }, [props.date]);
    return (jsxRuntime.jsx("div", tslib_es6.__assign({ ref: datePickerContainerRef }, { children: jsxRuntime.jsx(index['default'], { ref: datePickerInputRef, classNames: {
                container: DatePicker_module['default'].container,
                overlay: DatePicker_module['default'].overlay,
                overlayWrapper: DatePicker_module['default'].overlayWrapper,
            }, value: date, format: dateFormat, formatDate: utils.formatDate, parseDate: utils.parseDate, hideOnDayClick: false, placeholder: props.placeholder || day['default'](new Date()).format(dateFormat), component: function (props) { return jsxRuntime.jsx(index$1['default'].Input, tslib_es6.__assign({}, props), void 0); }, dayPickerProps: dayPickerProps }, void 0) }), void 0));
};

exports['default'] = DatePicker;
