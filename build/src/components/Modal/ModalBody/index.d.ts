import { WithComponent } from "../../../types/common";
export declare type ModalBodyProps = {
    /**
     * The Modal content. (props.children > props.content)
     */
    content?: string;
} & WithComponent;
declare const ModalBody: (props: ModalBodyProps) => JSX.Element;
export default ModalBody;
