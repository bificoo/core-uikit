import { PopupProps } from "reactjs-popup/dist/types";
import "./Tooltip.module.scss";
import { WithChildren } from "../../../types/common";
export declare type TooltipProps = PopupProps & WithChildren;
declare const Tooltip: ({ on, position, ...props }: TooltipProps) => JSX.Element;
export default Tooltip;
