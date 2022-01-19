/// <reference types="react" />
import { WithChildren, WithClassName } from "../../../types/common";
export declare type FormRadioProps = {
    /**
     * If true, the checkbox will be inline style.
     */
    inline?: boolean;
} & WithClassName & WithChildren & Omit<JSX.IntrinsicElements["input"], "type">;
declare const FormRadio: ({ children, inline, ...props }: FormRadioProps) => JSX.Element;
export default FormRadio;
