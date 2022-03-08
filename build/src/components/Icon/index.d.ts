import { WithClassName, WithStyle } from "../../types/common";
export declare type IconProps = {
    /**
     * Fill in the icon name.
     */
    name: string;
    width?: number;
    height?: number;
} & WithClassName & WithStyle;
export declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
