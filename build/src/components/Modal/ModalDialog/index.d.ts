import { ModalHeaderProps } from "../ModalHeader";
import { ModalFooterProps } from "../ModalFooter";
export declare type ModalDialogProps = {
    content?: string;
} & ModalHeaderProps & ModalFooterProps & ReactProps.Component;
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;
