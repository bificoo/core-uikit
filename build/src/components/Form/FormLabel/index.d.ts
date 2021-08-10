/// <reference types="react" />
export declare type FormLabelProps = JSXProps.LabelElement & {
    required?: boolean;
};
declare const FormLabel: ({ required, className, htmlFor, ...props }: FormLabelProps) => JSX.Element;
export default FormLabel;
