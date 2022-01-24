import { WithClassName, WithStyle } from "../../../types/common";
export declare type IconArrowProps = {
    className?: string;
    direction?: "up" | "down" | "right" | "left";
} & WithClassName & WithStyle;
declare const Arrow: ({ className, direction, style }: IconArrowProps) => JSX.Element;
export default Arrow;
