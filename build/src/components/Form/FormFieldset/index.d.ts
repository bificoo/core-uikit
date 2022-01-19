/// <reference types="react" />
import { WithChildren, WithClassName } from "../../../types/common";
export declare type FormFieldsetProps = {
    /**
     * If true, the checkbox will be inline style.
     */
    inline?: boolean;
} & WithChildren & WithClassName & JSX.IntrinsicElements["fieldset"];
declare const FormFieldset: ({ inline, className, ...props }: FormFieldsetProps) => JSX.Element;
export default FormFieldset;
