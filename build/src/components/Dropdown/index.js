import Dropdown$1 from './Dropdown/index.js';
import DropdownToggle from './DropdownToggle/index.js';
import DropdownMenu from './DropdownMenu/index.js';
import DropdownItem from './DropdownItem/index.js';
import DropdownHeader from './DropdownHeader/index.js';
import DropdownFooter from './DropdownFooter/index.js';

var Dropdown = Object.assign(Dropdown$1, {
    Toggle: DropdownToggle,
    Menu: DropdownMenu,
    Item: DropdownItem,
    Header: DropdownHeader,
    Footer: DropdownFooter,
});

export { Dropdown as default };
