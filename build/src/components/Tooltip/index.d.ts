import { BasePlacement } from "@popperjs/core";
export declare type TooltipProps = ReactProps.Component & {
    arrow?: boolean;
    content?: string;
    placement?: BasePlacement;
};
declare const Tooltip: ({ arrow, className, children, content, placement, }: TooltipProps) => JSX.Element;
export default Tooltip;
