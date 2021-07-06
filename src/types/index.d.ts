// export * as Badge from "components/Badge"

// export { default as Dropdown } from "components/Dropdown"
// export { default as Form } from "components/Form"
// export { default as Tooltip } from "components/Tooltip"

// export type { LinkButtonProps } from "components/Button/LinkButton"

// export type { DropdownProps } from "components/Dropdown"
// export type { DropdownToggleProps } from "components/Dropdown/DropdownToggle"
// export type { DropdownMenuProps } from "components/Dropdown/DropdownMenu"
// export type { DropdownItemProps } from "components/Dropdown/DropdownItem"

declare module "core-uikit" {
  import { ButtonProps } from "components/Button"
  import { default as Button } from "components/Button"

  declare const Button: React.Component<ButtonProps>
  export default Button
}
