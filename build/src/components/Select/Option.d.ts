import { OptionType } from "./index";
export declare type OptionProps = {
    disabled?: boolean;
    label: string;
    value: string | number;
    onClick?: (option: OptionType) => void;
} & ReactProps.Component;
declare const Option: ({ ...props }: OptionProps) => JSX.Element;
export default Option;
