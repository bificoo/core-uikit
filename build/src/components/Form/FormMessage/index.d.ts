import FormMessage, { FormMessageProps as OriginFormMessageProps } from "./FormMessage";
export declare type FormMessageProps = Omit<OriginFormMessageProps, "variant">;
declare const FormHelperMessage: (props: FormMessageProps) => JSX.Element;
declare const FormValidMessage: (props: FormMessageProps) => JSX.Element;
declare const FormErrorMessage: (props: FormMessageProps) => JSX.Element;
export default FormMessage;
export { FormHelperMessage, FormValidMessage, FormErrorMessage };
