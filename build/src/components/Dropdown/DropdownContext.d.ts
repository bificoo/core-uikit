import React from "react";
export declare type DropdownContextProps = {
    onClickItem: (eventKey?: ReactProps.EventKey) => void;
};
declare const DropdownContext: React.Context<DropdownContextProps>;
export { DropdownContext };
export default DropdownContext;
