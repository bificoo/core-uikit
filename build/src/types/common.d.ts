/// <reference types="react" />
export declare type WithChildren = {
    /**
     * Provide content to be rendered inside of a
     */
    children?: React.ReactNode;
};
export declare type WithClassName = {
    /**
     * For css customization.
     */
    className?: string;
};
export declare type WithStyle = {
    /**
     * The css styles.
     */
    style?: React.CSSProperties;
};
export declare type EventKey = string | number;
export declare type WithComponent = WithChildren & WithClassName & WithStyle;
