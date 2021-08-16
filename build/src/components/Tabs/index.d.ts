/// <reference types="react" />
export type { TabsProps } from "./Tabs";
export type { TabProps } from "./Tab";
declare const Tabs: {
    ({ ...props }: import("./Tabs").TabsProps): JSX.Element;
    Tab: ({ ...props }: import("./Tab").TabProps) => JSX.Element;
} & {
    Tab: ({ ...props }: import("./Tab").TabProps) => JSX.Element;
};
export default Tabs;
