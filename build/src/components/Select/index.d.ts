export declare type SelectProps = {
    isMulti?: boolean;
    placeholder?: string;
    defaultValue?: OptionType;
    onChange?: (value: OptionType[]) => void;
} & ReactProps.Component;
export declare type OptionType = {
    label: string;
    value: string | number;
};
declare const Select: {
    ({ isMulti, ...props }: SelectProps): JSX.Element;
    Option: ({ ...props }: import("./Option").OptionProps) => JSX.Element;
};
export default Select;
