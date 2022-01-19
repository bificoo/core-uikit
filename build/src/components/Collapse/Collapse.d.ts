import { WithComponent } from "../../types/common";
export declare type CollapseProps = {
    /**
     * Specify if the is expanded
     */
    defaultExpanded?: boolean;
} & WithComponent;
declare const Collapse: ({ defaultExpanded, ...props }: CollapseProps) => JSX.Element;
export default Collapse;
