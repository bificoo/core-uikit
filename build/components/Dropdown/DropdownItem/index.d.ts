/// <reference types="react" />
export declare type DropdownItemProps = {
    className?: string;
    children: React.ReactNode;
    eventKey?: string;
    active?: boolean;
    onClick?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: {
        eventKey?: string;
    }) => void;
};
declare const DropdownItem: ({ className, children, eventKey, active, onClick }: DropdownItemProps) => JSX.Element;
export default DropdownItem;
