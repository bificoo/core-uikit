import duration from "dayjs/plugin/duration";
import dayjs, { ConfigType } from "dayjs";
declare const day: {
    (config?: ConfigType, format?: string | undefined, strict?: boolean | undefined): dayjs.Dayjs;
    duration: duration.CreateDurationType;
};
export default day;
