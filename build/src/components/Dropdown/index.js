import Dropdown$1 from './Dropdown/index.js';
import DropdownToggle from './DropdownToggle/index.js';
import DropdownMenu from './DropdownMenu/index.js';
import DropdownItem from './DropdownItem/index.js';

var Dropdown = Object.assign(Dropdown$1, {
    Toggle: DropdownToggle,
    Menu: DropdownMenu,
    Item: DropdownItem,
});

export { Dropdown as default };
