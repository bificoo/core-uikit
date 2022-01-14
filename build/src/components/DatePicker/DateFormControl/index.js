import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import React__default, { useMemo } from 'react';
import Form from '../../Form/index.js';
import { formatDate } from '../utils.js';

var DateFormControl = React__default.forwardRef(function DateFormControl(_a, ref) {
    var _b = _a.dateFormat, dateFormat = _b === void 0 ? "YYYY-MM-DD" : _b, startDate = _a.startDate, endDate = _a.endDate, props = __rest(_a, ["dateFormat", "startDate", "endDate"]);
    var value = useMemo(function () {
        if ((!startDate && !endDate) || !dateFormat)
            return "";
        var formatStartDate = startDate && formatDate(startDate, dateFormat);
        var formatEndDate = endDate && formatDate(endDate, dateFormat);
        return "".concat(formatStartDate, " ~ ").concat(formatEndDate || formatStartDate);
    }, [startDate, endDate, dateFormat]);
    return jsx(Form.Input, __assign({ ref: ref, style: { width: "200px" } }, props, { value: value }), void 0);
});

export { DateFormControl as default };
