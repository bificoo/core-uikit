'use strict';

var utc = require('../../node_modules/dayjs/plugin/utc.js');
var timezone = require('../../node_modules/dayjs/plugin/timezone.js');
var duration = require('../../node_modules/dayjs/plugin/duration.js');
var customParseFormat = require('../../node_modules/dayjs/plugin/customParseFormat.js');
var dayjs_min = require('../../node_modules/dayjs/dayjs.min.js');

dayjs_min.extend(utc);
dayjs_min.extend(timezone);
dayjs_min.extend(duration);
dayjs_min.extend(customParseFormat);
var day = function (config, format, strict) {
    // return dayjs.utc(date, "America/New_York") //.tz("America/New_York")
    return dayjs_min.utc(config, format, strict);
};
day.duration = dayjs_min.duration;

module.exports = day;
