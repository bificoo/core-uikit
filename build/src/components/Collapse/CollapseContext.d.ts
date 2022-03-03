import React from "react";
export declare type CollapseContextProps = {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
};
declare const CollapseContext: React.Context<CollapseContextProps>;
export { CollapseContext };
export default CollapseContext;
