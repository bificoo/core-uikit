export type { TabProps } from "./Tab";
export type { TabsProps } from "./Tabs";
declare const Tabs: (({ ...props }: import("./Tabs").TabsProps) => JSX.Element) & {
    Tab: {
        (props: import("./Tab").TabProps): JSX.Element;
        display: any;
    };
};
export default Tabs;
