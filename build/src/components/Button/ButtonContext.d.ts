import React from "react";
export declare type ButtonContextProps = {
    activeKey?: ReactProps.EventKey;
    setActiveKey: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
    selectKey?: ReactProps.EventKey;
};
declare const ButtonContext: React.Context<ButtonContextProps>;
export { ButtonContext };
export default ButtonContext;
