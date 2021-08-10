/// <reference types="react" />
export declare type FormCheckboxProps = {
    inline?: boolean;
} & Omit<JSXProps.InputElement, "type">;
declare const FormCheckbox: ({ children, inline, ...props }: FormCheckboxProps) => JSX.Element;
export default FormCheckbox;
