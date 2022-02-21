import cx from "classnames";
import styled from "./ModalDialog.module.scss";
import { WithComponent } from "types/common";

export type ModalDialogProps = WithComponent;

const ModalDialog = (props: ModalDialogProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)}>{props.children}</div>
  );
};

export default ModalDialog;
