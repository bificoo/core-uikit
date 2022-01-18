export declare type TreeProps = {
    defaultActiveKey?: string[];
    onClick: (nodes?: string[]) => void;
} & ReactProps.WithChildren;
declare const Tree: (props: TreeProps) => JSX.Element;
export default Tree;
