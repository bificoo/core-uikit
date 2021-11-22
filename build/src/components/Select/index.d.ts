import React, { CSSProperties } from "react";
export declare type SelectProps = {
    isMulti?: boolean;
    placeholder?: string;
    defaultValue?: OptionType | OptionType[];
    style?: CSSProperties;
    disabled?: boolean;
    onChange?: (e: React.MouseEvent<Element, MouseEvent>, { selected, selectedList, }: {
        selected: ReactProps.EventKey | null;
        selectedList: OptionType[];
    }) => void;
} & ReactProps.Component;
export declare type OptionType = {
    value: string;
    eventKey: ReactProps.EventKey;
};
declare const Select: {
    ({ isMulti, ...props }: SelectProps): JSX.Element;
    Option: ({ ...props }: import("./Option").OptionProps) => JSX.Element;
};
export default Select;
