/// <reference types="react" />
import { WithChildren, WithClassName } from "../../../types/common";
export declare type FormFieldsetProps = {
    inline?: boolean;
} & WithChildren & WithClassName & JSX.IntrinsicElements["fieldset"];
declare const FormFieldset: ({ inline, className, ...props }: FormFieldsetProps) => JSX.Element;
export default FormFieldset;
