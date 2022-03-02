import { IconButtonProps } from "./IconButton";
import { LinkButton } from "./LinkButton";
export declare type ButtonProps = IconButtonProps;
export type { ButtonGroupProps } from "./ButtonGroup";
export type { LinkButtonProps } from "./LinkButton";
declare const Button: ((props: import("./Button").ButtonProps) => JSX.Element) & {
    Group: (props: import("./ButtonGroup").ButtonGroupProps) => JSX.Element;
};
export { LinkButton };
export default Button;
