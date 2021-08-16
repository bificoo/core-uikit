/// <reference types="react" />
import { PopupProps } from "reactjs-popup/dist/types";
import "./Tooltip.module.scss";
export declare type TooltipProps = PopupProps;
declare const Tooltip: ({ on, position, arrow, ...props }: TooltipProps) => JSX.Element;
export default Tooltip;
