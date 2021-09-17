export type { TooltipProps } from "./Tooltip";
export type { TooltipToggleProps } from "./TooltipToggle";
declare const Tooltip: (({ on, position, arrow, ...props }: import("reactjs-popup/dist/types").PopupProps) => JSX.Element) & {
    Toggle: import("react").ForwardRefExoticComponent<{
        onClick?: import("react").MouseEventHandler<HTMLElement> | undefined;
    } & ReactProps.WithChildren & ReactProps.WithClassName & import("react").RefAttributes<HTMLDivElement>>;
    Body: (props: ReactProps.WithChildren) => JSX.Element;
};
export default Tooltip;
