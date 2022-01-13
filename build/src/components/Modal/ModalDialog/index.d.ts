import { ModalHeaderProps } from "../ModalHeader";
import { ModalFooterProps } from "../ModalFooter";
import { WithChildren } from "../../../types/common";
export declare type ModalDialogProps = {
    /**
     * The Modal content. (props.children > props.content)
     */
    content?: string;
} & ModalHeaderProps & ModalFooterProps & WithChildren;
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;
