export type { TooltipProps } from "./Tooltip";
export type { TooltipToggleProps } from "./TooltipToggle";
declare const Tooltip: (({ on, position, ...props }: import("./Tooltip").TooltipProps) => JSX.Element) & {
    Toggle: import("react").ForwardRefExoticComponent<{
        onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    } & import("../../types/common").WithChildren & import("../../types/common").WithClassName & import("../../types/common").WithStyle & import("react").RefAttributes<HTMLDivElement>>;
    Body: {
        (props: import("./TooltipBody").TooltipBodyProps): JSX.Element;
        display: any;
    };
};
export default Tooltip;
