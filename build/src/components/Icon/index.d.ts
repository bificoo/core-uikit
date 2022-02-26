import { WithClassName, WithStyle } from "../../types/common";
export declare type IconProps = {
    /**
     * Fill in the icon name.
     */
    name: string;
} & WithClassName & WithStyle;
export declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
