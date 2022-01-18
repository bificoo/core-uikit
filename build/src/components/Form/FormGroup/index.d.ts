/// <reference types="react" />
import { WithComponent } from "../../../types/common";
export declare type FormGroupProps = WithComponent & Partial<{
    formId: string;
    label: JSX.Element;
    layout: "horizontal" | "vertical";
    labelWidth: number;
}>;
declare const FormGroup: (props: FormGroupProps) => JSX.Element;
export default FormGroup;
