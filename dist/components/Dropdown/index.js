import DropdownBase from "./Dropdown";
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
var Dropdown = Object.assign(DropdownBase, {
    Toggle: DropdownToggle,
    Menu: DropdownMenu,
    Item: DropdownItem,
});
export default Dropdown;
