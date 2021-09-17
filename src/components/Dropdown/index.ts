import DropdownBase from "./Dropdown"
export type { DropdownProps, DropdownSelectEventProps } from "./Dropdown"

import DropdownToggle from "./DropdownToggle"
export type { DropdownToggleProps } from "./DropdownToggle"

import DropdownMenu from "./DropdownMenu"
export type { DropdownMenuProps } from "./DropdownMenu"

import DropdownItem from "./DropdownItem"
export type { DropdownItemProps } from "./DropdownItem"

import DropdownArrow from "./DropdownArrow"

const Dropdown = Object.assign(DropdownBase, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Arrow: DropdownArrow,
})

export default Dropdown
