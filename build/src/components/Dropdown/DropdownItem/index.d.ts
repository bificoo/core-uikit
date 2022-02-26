import { WithComponent, EventKey } from "../../../types/common";
export declare type DropdownItemProps = {
    /**
     * The dropdown item key.
     */
    eventKey?: EventKey;
} & WithComponent;
declare const DropdownItem: (props: DropdownItemProps) => JSX.Element;
export default DropdownItem;
