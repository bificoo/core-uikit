import { WithComponent, EventKey } from "../../../types/common";
export declare type TabProps = {
    /**
     * The tab content.
     */
    title: string;
    /**
     * The tab key.
     */
    eventKey: EventKey;
} & WithComponent;
declare const Tab: {
    (props: TabProps): JSX.Element;
    display: any;
};
export default Tab;
