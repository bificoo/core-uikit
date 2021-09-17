import { FormAttributes } from "../FormContext";
export declare type FormProps = JSXProps.FormElement & FormAttributes;
declare const Form: ({ layout, labelWidth, ...props }: FormProps) => JSX.Element;
export default Form;
