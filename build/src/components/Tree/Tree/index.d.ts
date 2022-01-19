import { WithChildren } from "../../../types/common";
export declare type TreeProps = {
    children: WithChildren;
    /**
     * The default tree menu active key.
     */
    defaultActiveKey?: string;
    /**
     * Called when clicked value has changed.
     */
    onClick?: (targetKey: string, moreInfo: {
        parents: string[];
    }) => void;
} & WithChildren;
declare const Tree: ({ defaultActiveKey, onClick, children }: TreeProps) => JSX.Element;
export default Tree;
