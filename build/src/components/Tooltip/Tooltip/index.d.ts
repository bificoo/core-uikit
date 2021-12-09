import { PopupProps } from "reactjs-popup/dist/types";
import "./Tooltip.module.scss";
export declare type TooltipProps = PopupProps;
declare const Tooltip: ({ on, position, arrow, offsetX, offsetY, ...props }: TooltipProps) => JSX.Element;
export default Tooltip;
