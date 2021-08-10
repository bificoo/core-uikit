import React from "react";
export declare type DropdownContextProps = {
    activeKey?: ReactProps.EventKey;
    setActiveKey: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
};
declare const DropdownContext: React.Context<DropdownContextProps>;
export { DropdownContext };
export default DropdownContext;
