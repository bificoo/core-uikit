import { IconButtonProps } from "./IconButton";
export declare type ButtonProps = IconButtonProps;
export type { ButtonGroupProps } from "./ButtonGroup";
import LinkButton from "./LinkButton";
export { LinkButton };
export type { LinkButtonProps } from "./LinkButton";
declare const Button: ((props: import("./Button").ButtonProps) => JSX.Element) & {
    Group: (props: import("./ButtonGroup").ButtonGroupProps) => JSX.Element;
};
export default Button;
