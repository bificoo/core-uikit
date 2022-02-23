import { WithComponent } from "../../types/common";
declare const VARIANT: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly IMPORTANT: "important";
};
export declare type BadgeProps = {
    /**
     * Specify the type of the
     */
    variant?: typeof VARIANT[keyof typeof VARIANT];
    /**
     * Specify if the is circle
     */
    pill?: boolean;
} & WithComponent;
declare const Badge: ({ variant, pill, className, children, ...props }: BadgeProps) => JSX.Element;
export default Badge;
