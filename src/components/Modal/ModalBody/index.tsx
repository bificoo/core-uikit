import cx from "classnames";
import styled from "./ModalBody.module.scss";
import { WithComponent } from "types/common";

export type ModalBodyProps = {
  /**
   * The Modal content. (props.children > props.content)
   */
  content?: string;
} & WithComponent;

const ModalBody = (props: ModalBodyProps) => {
  return (
    <main className={cx(styled.main, props.className)} style={props.style}>
      {props.children || props.content}
    </main>
  );
};

export default ModalBody;
