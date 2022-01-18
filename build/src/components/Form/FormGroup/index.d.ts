/// <reference types="react" />
import { WithComponent } from "../../../types/common";
export declare type FormGroupProps = WithComponent & Partial<{
    /**
     * A unique identifier for the form group
     */
    formId: string;
    label: JSX.Element;
    /**
     * Specify the type of the
     */
    layout: "horizontal" | "vertical";
    /**
     * Allows the form group to grow to the custom width
     */
    labelWidth: number;
}>;
declare const FormGroup: (props: FormGroupProps) => JSX.Element;
export default FormGroup;
