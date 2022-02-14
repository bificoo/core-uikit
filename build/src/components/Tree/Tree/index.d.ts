import { WithChildren } from "../../../types/common";
export declare type TreeProps = {
    /**
     * The expanded list key.
     */
    expanded: string[];
    /**
     * The active list key.
     */
    selected?: string[];
    /**
     * Click the tree category.
     */
    onNodeToggle: (nodeIds: string[]) => void;
    /**
     * Click the tree item.
     */
    onNodeSelect: (nodeIds: string[]) => void;
} & WithChildren;
declare const Tree: ({ expanded, selected, onNodeToggle, onNodeSelect, children }: TreeProps) => JSX.Element;
export default Tree;
