import day from '../../utils/day.js';

var formatDate = function (date, format) {
    return day(date).format(format);
};
var parseDate = function (str, format) {
    return day(str, format).toDate();
};

export { formatDate, parseDate };
