/// <reference types="react" />
import { WithClassName, WithChildren } from "../../../types/common";
export declare type LinkButtonProps = WithClassName & WithChildren & JSX.IntrinsicElements["a"];
export declare const LinkButton: {
    ({ className, children, ...props }: LinkButtonProps): JSX.Element;
    display: any;
};
export default LinkButton;
