/// <reference types="react" />
export declare type DropdownMenuProps = {
    className?: string;
    style?: {
        [key: string]: React.CSSProperties;
    };
    eventKey?: string;
    attributes?: {
        [key: string]: {
            [key: string]: string;
        } | undefined;
    };
    children?: React.ReactNode;
};
export declare type Ref = HTMLDivElement;
declare const DropdownMenu: import("react").ForwardRefExoticComponent<DropdownMenuProps & import("react").RefAttributes<HTMLDivElement>>;
export default DropdownMenu;
