import React from "react";
export declare type DropdownMenuProps = {
    style?: {
        [key: string]: React.CSSProperties;
    };
    activeKey?: ReactProps.EventKey;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
} & ReactProps.Component;
declare const DropdownMenu: {
    (props: DropdownMenuProps): JSX.Element;
    displayName: string;
};
export default DropdownMenu;
