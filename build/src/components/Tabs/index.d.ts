export declare type TabsProps = {
    defaultActiveKey: string | number;
} & ReactProps.Component;
declare const Tabs: {
    ({ ...props }: TabsProps): JSX.Element;
    Tab: ({ ...props }: import("./Tab").TabProps) => JSX.Element;
};
export default Tabs;
