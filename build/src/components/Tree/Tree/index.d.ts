import { WithChildren } from "../../../types/common";
export declare type TreeProps = {
    children: WithChildren;
    /**
     * Expanded key.
     */
    expanded: string[];
    /**
     * Actived key.
     */
    selected?: string[];
    /**
     * Click the expanded item.
     */
    onNodeToggle: (nodeIds: string[]) => void;
    /**
     * Click the the Item which can't expand.
     */
    onNodeSelect: (nodeIds: string[]) => void;
} & WithChildren;
declare const Tree: ({ expanded, selected, onNodeToggle, onNodeSelect, children }: TreeProps) => JSX.Element;
export default Tree;
