export declare type FormRadioProps = {
    inline?: boolean;
} & Omit<JSXProps.InputElement, "type">;
declare const FormRadio: ({ children, inline, ...props }: FormRadioProps) => JSX.Element;
export default FormRadio;
