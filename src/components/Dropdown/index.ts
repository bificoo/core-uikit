import DropdownBase from "./Dropdown";
import DropdownToggle from "./DropdownToggleForButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownHeader from "./DropdownHeader";
import DropdownFooter from "./DropdownFooter";

export type {
  DropdownProps,
  DropdownSelectEventProps,
  DropdownActions,
} from "./Dropdown";
export type { DropdownToggleProps } from "./DropdownToggle";
export type { DropdownMenuProps } from "./DropdownMenu";
export type { DropdownItemProps } from "./DropdownItem";

const Dropdown = Object.assign(DropdownBase, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Header: DropdownHeader,
  Footer: DropdownFooter,
});

export default Dropdown;
