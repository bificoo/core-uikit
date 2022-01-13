import React from "react";
export declare type FormAttributes = Partial<{
    layout: "horizontal" | "vertical";
    labelWidth: number;
}>;
export declare type FormContextProps = {
    attributes?: FormAttributes;
    setAttributes: (attributes: FormAttributes) => void;
};
declare const FormContext: React.Context<FormContextProps>;
export declare type FormGroupAttributes = Partial<{
    formId: string;
    entered: boolean;
    disabled: boolean;
    readOnly: boolean;
    isValid: boolean | null;
    isInvalid: boolean | null;
}>;
export declare type FormGroupContextProps = {
    attributes?: FormGroupAttributes;
    setAttributes: (attributes: FormGroupAttributes) => void;
};
declare const FormGroupContext: React.Context<FormGroupContextProps>;
export { FormGroupContext };
export default FormContext;
