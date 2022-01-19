import React from "react";
export declare type DateFormControlProps = {
    startDate?: Date;
    endDate?: Date;
    dateFormat?: string;
};
declare const DateFormControl: React.ForwardRefExoticComponent<DateFormControlProps & React.RefAttributes<HTMLInputElement>>;
export default DateFormControl;
