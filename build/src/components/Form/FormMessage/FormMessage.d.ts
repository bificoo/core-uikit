/// <reference types="react" />
import { WithChildren, WithClassName } from "../../../types/common";
export declare type FormMessageProps = JSX.IntrinsicElements["p"] & WithChildren & WithClassName & {
    variant: "helper" | "valid" | "error";
};
declare const FormMessage: ({ className, ...props }: FormMessageProps) => JSX.Element;
export default FormMessage;
