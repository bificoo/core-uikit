import React from "react";
export declare type DropdownMenuProps = {
    style?: React.CSSProperties;
    activeKey?: {
        current: ReactProps.EventKey;
    };
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: {
            current: ReactProps.EventKey;
        };
    }) => void;
} & ReactProps.Component;
declare const DropdownMenu: {
    (props: DropdownMenuProps): JSX.Element;
    displayName: string;
};
export default DropdownMenu;
