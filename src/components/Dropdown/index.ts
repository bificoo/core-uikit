import DropdownBase from "./Dropdown"

import DropdownToggle from "./DropdownToggle"

import DropdownMenu from "./DropdownMenu"

import DropdownItem from "./DropdownItem"

export type { DropdownProps, DropdownSelectEventProps, DropdownActions } from "./Dropdown"
export type { DropdownToggleProps } from "./DropdownToggle"
export type { DropdownMenuProps } from "./DropdownMenu"
export type { DropdownItemProps } from "./DropdownItem"

const Dropdown = Object.assign(DropdownBase, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
})

export default Dropdown
