import { WithClassName, WithStyle } from "../../../types/common";
export declare type IconArrowProps = {
    /**
     * Specify the icon transfer direction
     */
    direction?: "up" | "down" | "right" | "left";
} & WithClassName & WithStyle;
declare const Arrow: ({ direction, style }: IconArrowProps) => JSX.Element;
export default Arrow;
