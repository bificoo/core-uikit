import cx from "classnames";
import styled from "./DropdownFooter.module.scss";
import { WithComponent } from "types/common";

export type DropdownFooterProps = WithComponent;

const DropdownFooter = (props: DropdownFooterProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)}>{props.children}</div>
  );
};

export default DropdownFooter;
