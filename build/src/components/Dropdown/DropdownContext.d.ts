import React from "react";
import { EventKey } from "../../types/common";
export declare type DropdownContextProps = {
    activeKey?: EventKey;
    setActiveKey: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: EventKey;
    }) => void;
    handlePopupClose: () => void;
};
declare const DropdownContext: React.Context<DropdownContextProps>;
export { DropdownContext };
export default DropdownContext;
