import React from "react";
import { WithComponent, EventKey } from "../../types/common";
export declare type SelectProps = {
    /**
     * Specify if the is multiple
     */
    isMulti?: boolean;
    /**
     * Default input placeholder.
     */
    placeholder?: string;
    /**
     * The default input element value.
     */
    defaultValue?: SelectOptionType | SelectOptionType[];
    /**
     * If true, the input will be disabled.
     */
    disabled?: boolean;
    /**
     * Callback when select change.
     */
    onChange?: (e: React.MouseEvent<Element, MouseEvent>, { selected, selectedList, }: {
        selected: EventKey | null;
        selectedList: SelectOptionType[];
    }) => void;
} & WithComponent;
export type { SelectOptionProps } from "./SelectOption";
export declare type SelectOptionType = {
    value: string;
    eventKey: EventKey;
};
declare const Select: {
    ({ isMulti, ...props }: SelectProps): JSX.Element;
    Option: ({ ...props }: import("./SelectOption").SelectOptionProps) => JSX.Element;
};
export default Select;
