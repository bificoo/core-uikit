import React from "react";
import { WithComponent } from "../../../types/common";
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
    onChange?: ({ startDate: endDate }: {
        startDate: Date | null;
        endDate: Date | null;
    }) => void;
} & WithComponent;
declare const RangePicker: React.ForwardRefExoticComponent<{
    /**
     * Start date.
     */
    startDate?: Date | undefined;
    /**
     * End date.
     */
    endDate?: Date | undefined;
    /**
     * Min selectable date.
     */
    minDate?: Date | undefined;
    /**
     * Max selectable date.
     */
    maxDate?: Date | undefined;
    /**
     * Date format.
     */
    dateFormat?: string | undefined;
    /**
     * Default input placeholder.
     */
    placeholder?: string | undefined;
    /**
     * Callback when date change.
     */
    onChange?: (({ startDate: endDate }: {
        startDate: Date | null;
        endDate: Date | null;
    }) => void) | undefined;
} & import("../../../types/common").WithClassName & import("../../../types/common").WithStyle & React.RefAttributes<HTMLInputElement>>;
export default RangePicker;
