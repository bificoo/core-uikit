/// <reference types="react" />
import { FormAttributes } from "../FormContext";
export declare type FormProps = JSX.IntrinsicElements["form"] & FormAttributes;
declare const Form: ({ layout, labelWidth, ...props }: FormProps) => JSX.Element;
export default Form;
