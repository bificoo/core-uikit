export type { ButtonProps } from "./Button"

import ButtonBase from "./IconButton"
export type { IconButtonProps } from "./IconButton"

import ButtonGroup from "./ButtonGroup"
export type { ButtonGroupProps } from "./ButtonGroup"

import LinkButton from "./LinkButton"
export { LinkButton }
export type { LinkButtonProps } from "./LinkButton"

const Button = Object.assign(ButtonBase, {
  Group: ButtonGroup,
})

export default Button
