'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utc = require('../../node_modules/dayjs/plugin/utc.js');
var timezone = require('../../node_modules/dayjs/plugin/timezone.js');
var duration = require('../../node_modules/dayjs/plugin/duration.js');
var customParseFormat = require('../../node_modules/dayjs/plugin/customParseFormat.js');
var dayjs_min = require('../../node_modules/dayjs/dayjs.min.js');

dayjs_min['default'].extend(utc['default']);
dayjs_min['default'].extend(timezone['default']);
dayjs_min['default'].extend(duration['default']);
dayjs_min['default'].extend(customParseFormat['default']);
const day = (config, format, strict) => {
    // return dayjs.utc(date, "America/New_York") //.tz("America/New_York")
    return dayjs_min['default'].utc(config, format, strict);
};
day.duration = dayjs_min['default'].duration;

exports['default'] = day;
