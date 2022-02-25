import cx from "classnames";
import styled from "./DropdownHeader.module.scss";
import { WithComponent } from "types/common";

export type DropdownHeaderProps = WithComponent;

const DropdownHeader = (props: DropdownHeaderProps) => {
  return (
    <div className={cx(styled.wrapper, props.className)}>{props.children}</div>
  );
};

export default DropdownHeader;
