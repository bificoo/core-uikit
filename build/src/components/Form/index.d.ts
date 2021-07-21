/// <reference types="react" />
export type { FormProps } from "./Form";
export type { FormLabelProps } from "./FormLabel";
export type { FormInputProps } from "./FormInput";
export type { FormTextareaProps } from "./FormTextarea";
export type { FormCheckboxProps } from "./FormCheckbox";
export type { FormRadioProps } from "./FormRadio";
export type { FormFeedbackProps } from "./FormFeedback";
export type { FormGroupProps } from "./FormGroup";
import InputGroup, { Prepend, Append } from "./InputGroup";
export type { InputGroupProps, PrependProps, AppendProps } from "./InputGroup";
declare const Form: (({ layout, labelWidth, ...props }: import("./Form").FormProps) => JSX.Element) & {
    Label: ({ required, className, htmlFor, ...props }: import("./FormLabel").FormLabelProps) => JSX.Element;
    Input: import("react").ForwardRefExoticComponent<Pick<import("./types").FormControlProps & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement>, "key" | keyof import("./types").FormControlProps | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & import("react").RefAttributes<HTMLInputElement>>;
    Textarea: import("react").ForwardRefExoticComponent<Pick<import("./types").FormControlProps & import("react").ClassAttributes<HTMLTextAreaElement> & import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, "key" | keyof import("./types").FormControlProps | keyof import("react").TextareaHTMLAttributes<HTMLTextAreaElement>> & import("react").RefAttributes<HTMLTextAreaElement>>;
    Checkbox: ({ children, ...props }: import("./FormCheckbox").FormCheckboxProps) => JSX.Element;
    Radio: ({ children, ...props }: import("./FormRadio").FormRadioProps) => JSX.Element;
    Feedback: ({ className, ...props }: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => JSX.Element;
    Group: (props: import("./FormGroup").FormGroupProps) => JSX.Element;
};
export { InputGroup, Prepend, Append };
export default Form;
