declare const Collapse: ((props: import("./Collapse").CollapseProps) => JSX.Element) & {
    Header: (props: ReactProps.Component) => JSX.Element;
    Panel: (props: ReactProps.Component) => JSX.Element;
};
export type { CollapseProps } from "./Collapse";
export default Collapse;
