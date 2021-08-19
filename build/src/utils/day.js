import utc from '../../node_modules/dayjs/plugin/utc.js';
import timezone from '../../node_modules/dayjs/plugin/timezone.js';
import duration from '../../node_modules/dayjs/plugin/duration.js';
import customParseFormat from '../../node_modules/dayjs/plugin/customParseFormat.js';
import dayjs from '../../node_modules/dayjs/dayjs.min.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(customParseFormat);
var day = function (config, format, strict) {
    // return dayjs.utc(date, "America/New_York") //.tz("America/New_York")
    return dayjs.utc(config, format, strict);
};
day.duration = dayjs.duration;

export { day as default };
