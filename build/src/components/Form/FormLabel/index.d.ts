/// <reference types="react" />
export declare type FormLabelProps = JSX.IntrinsicElements["label"] & {
    required?: boolean;
};
declare const FormLabel: ({ required, className, htmlFor, ...props }: FormLabelProps) => JSX.Element;
export default FormLabel;
