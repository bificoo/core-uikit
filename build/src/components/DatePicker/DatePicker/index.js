'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../../../node_modules/react-day-picker/DayPickerInput/index.js');
var index$1 = require('../../Form/index.js');
var useOutsideEvent = require('../../../hooks/useOutsideEvent.js');
var day = require('../../../utils/day.js');
var utils = require('../utils.js');
var DatePicker_module = require('./DatePicker.module.scss.js');

const DatePicker = (_a) => {
    var { dateFormat = "YYYY-MM-DD" } = _a, props = _tslib.__rest(_a, ["dateFormat"]);
    const [date, setDate] = React.useState(props.date || new Date());
    const datePickerContainerRef = React.useRef(null);
    const datePickerInputRef = React.useRef(null);
    const dayPickerProps = {
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        onDayClick: (date, { selected, disabled }) => {
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
        dayPickerProps.disabledDays = Object.assign(Object.assign({}, dayPickerProps.disabledDays), { before: props.minDate });
    }
    useOutsideEvent['default']({
        refs: [datePickerContainerRef],
        onClickOutside: () => {
            var _a;
            (_a = datePickerInputRef === null || datePickerInputRef === void 0 ? void 0 : datePickerInputRef.current) === null || _a === void 0 ? void 0 : _a.hideDayPicker();
        },
    });
    React.useEffect(() => {
        setDate(props.date);
    }, [props.date]);
    return (jsxRuntime.jsx("div", Object.assign({ ref: datePickerContainerRef }, { children: jsxRuntime.jsx(index['default'], { ref: datePickerInputRef, classNames: {
                container: DatePicker_module['default'].container,
                overlay: DatePicker_module['default'].overlay,
                overlayWrapper: DatePicker_module['default'].overlayWrapper,
            }, value: date, format: dateFormat, formatDate: utils.formatDate, parseDate: utils.parseDate, hideOnDayClick: false, placeholder: props.placeholder || day['default'](new Date()).format(dateFormat), component: (props) => jsxRuntime.jsx(index$1['default'].Input, Object.assign({}, props), void 0), dayPickerProps: dayPickerProps }, void 0) }), void 0));
};

exports['default'] = DatePicker;
