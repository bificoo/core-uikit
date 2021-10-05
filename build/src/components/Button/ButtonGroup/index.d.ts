import React from "react";
export declare type ButtonGroupProps = {
    defaultActiveKey?: ReactProps.EventKey;
    onSelect?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: ReactProps.EventKey;
    }) => void;
} & ReactProps.WithChildren;
declare const ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
export default ButtonGroup;
