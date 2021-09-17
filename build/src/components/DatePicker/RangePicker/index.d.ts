export declare type RangePickerProps = {
    startDate?: Date;
    endDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: string;
    placeholder?: string;
    onChange?: (startDate: Date, endDate: Date) => void;
};
declare const RangePicker: ({ dateFormat, ...props }: {
    [x: string]: any;
    dateFormat?: string | undefined;
}) => JSX.Element;
export default RangePicker;
