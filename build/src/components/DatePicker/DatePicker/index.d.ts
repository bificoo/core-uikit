export declare type DatePickerProps = {
    /**
     * Date value.
     */
    date?: Date;
    /**
     * Min selectable date.
     */
    minDate?: Date;
    /**
     * Max selectable date.
     */
    maxDate?: Date;
    /**
     * Date format.
     */
    dateFormat?: string;
    /**
     * Default input placeholder.
     */
    placeholder?: string;
    /**
     * Disabled input box.
     */
    disabled?: boolean;
    /**
     * Callback when date change.
     */
    onChange?: (date: Date) => void;
};
declare const DatePicker: {
    ({ dateFormat, ...props }: DatePickerProps): JSX.Element;
    display: any;
};
export default DatePicker;
