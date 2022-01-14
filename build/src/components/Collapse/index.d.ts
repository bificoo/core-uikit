declare const Collapse: (({ defaultExpanded, ...props }: import("./Collapse").CollapseProps) => JSX.Element) & {
    Header: (props: import("../../types/common").WithComponent) => JSX.Element;
    Panel: (props: import("../../types/common").WithComponent) => JSX.Element;
};
export type { CollapseProps } from "./Collapse";
export default Collapse;
