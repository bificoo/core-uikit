export type { ButtonProps } from "./Button";
export type { ButtonGroupProps } from "./ButtonGroup";
import LinkButton from "./LinkButton";
export { LinkButton };
export type { LinkButtonProps } from "./LinkButton";
declare const Button: (({ variant, block, className, children, eventKey, onClick, ...props }: import("./Button").ButtonProps) => JSX.Element) & {
    Group: (props: import("./ButtonGroup").ButtonGroupProps) => JSX.Element;
};
export default Button;
