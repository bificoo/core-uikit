import Dropdown$2 from './Dropdown/index.js';
import DropdownToggleForButton from './DropdownToggleForButton/index.js';
import DropdownMenu from './DropdownMenu/index.js';
import DropdownItem from './DropdownItem/index.js';
import DropdownHeader from './DropdownHeader/index.js';
import DropdownFooter from './DropdownFooter/index.js';

var Dropdown = Object.assign(Dropdown$2, {
    Toggle: DropdownToggleForButton,
    Menu: DropdownMenu,
    Item: DropdownItem,
    Header: DropdownHeader,
    Footer: DropdownFooter,
});
var Dropdown$1 = Dropdown;

export { Dropdown$1 as default };
