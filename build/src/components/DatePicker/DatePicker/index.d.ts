/// <reference types="react" />
export declare type DatePickerProps = {
    date: Date;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: string;
    placeholder?: string;
    onChange?: (date: Date) => void;
};
declare const DatePicker: ({ dateFormat, ...props }: DatePickerProps) => JSX.Element;
export default DatePicker;
