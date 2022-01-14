export declare type RangePickerProps = {
    /**
     * Start date.
     */
    startDate?: Date;
    /**
     * End date.
     */
    endDate?: Date;
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
     * Callback when date change.
     */
    onChange?: (startDate: Date, endDate: Date) => void;
};
declare const RangePicker: {
    ({ dateFormat, ...props }: RangePickerProps): JSX.Element;
    display: any;
};
export default RangePicker;
