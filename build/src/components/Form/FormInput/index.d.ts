import React from "react";
import { FormControlProps } from "../types";
export declare type FormInputProps = FormControlProps & JSXProps.InputElement;
export declare type FormInputRef = React.Ref<HTMLInputElement>;
declare const FormInput: React.ForwardRefExoticComponent<Pick<FormControlProps & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>, "key" | keyof FormControlProps | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
export default FormInput;
