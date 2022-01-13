export declare type FormMessageProps = JSXProps.PElement & {
    variant: "helper" | "valid" | "error";
};
declare const FormMessage: ({ className, ...props }: FormMessageProps) => JSX.Element;
export default FormMessage;
