/// <reference types="react" />
import { OptionType } from "./index";
export declare type OptionProps = {
    disabled?: boolean;
    value: string;
    eventKey: ReactProps.EventKey;
    onClick?: (e: React.MouseEvent<Element, MouseEvent>, option: OptionType) => void;
} & ReactProps.Component;
declare const Option: ({ ...props }: OptionProps) => JSX.Element;
export default Option;
