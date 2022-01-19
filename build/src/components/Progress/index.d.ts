import { WithComponent } from "../../types/common";
export declare type ProgressProps = {
    /** Progress percent between <code>0-100</code> */
    percent: number;
} & WithComponent;
declare const Progress: {
    (props: ProgressProps): JSX.Element;
    displayName: any;
};
export default Progress;
