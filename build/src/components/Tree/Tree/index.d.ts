import { WithChildren } from "../../../types/common";
export declare type TreeProps = {
    children: WithChildren;
    defaultActiveKey?: string;
    onClick?: (targetKey: string, moreInfo: {
        parents: string[];
    }) => void;
} & WithChildren;
declare const Tree: ({ defaultActiveKey, onClick, children }: TreeProps) => JSX.Element;
export default Tree;
