import React from "react";
import { FormControlProps } from "../types";
export declare type FormTextareaProps = FormControlProps & JSXProps.TextareaElement;
export declare type FormTextareaRef = React.Ref<HTMLTextAreaElement>;
declare const FormTextarea: React.ForwardRefExoticComponent<Pick<FormControlProps & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, "key" | keyof FormControlProps | keyof React.TextareaHTMLAttributes<HTMLTextAreaElement>> & React.RefAttributes<HTMLTextAreaElement>>;
export default FormTextarea;
