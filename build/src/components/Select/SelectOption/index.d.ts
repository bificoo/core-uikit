/// <reference types="react" />
import { SelectOptionType } from "../index";
import { WithComponent } from "../../../types/common";
export declare type SelectOptionProps = {
    /**
     * If true, the input will be disabled.
     */
    disabled?: boolean;
    /**
     * The select option value.
     */
    value: string;
    /**
     * The select option key.
     */
    eventKey: ReactProps.EventKey;
    /**
     * Callback when click.
     */
    onClick?: (e: React.MouseEvent<Element, MouseEvent>, option: SelectOptionType) => void;
} & WithComponent;
declare const SelectOption: ({ ...props }: SelectOptionProps) => JSX.Element;
export default SelectOption;
