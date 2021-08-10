/// <reference types="react" />
export declare type FormGroupProps = ReactProps.Component & Partial<{
    formId: string;
    label: JSX.Element;
    layout: "horizontal" | "vertical";
    labelWidth: number;
}>;
declare const FormGroup: (props: FormGroupProps) => JSX.Element;
export default FormGroup;
