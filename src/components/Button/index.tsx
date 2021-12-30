import ButtonBase, { IconButtonProps } from "./IconButton"
export type ButtonProps = IconButtonProps

import ButtonGroup from "./ButtonGroup"
export type { ButtonGroupProps } from "./ButtonGroup"

import LinkButton from "./LinkButton"
export { LinkButton }
export type { LinkButtonProps } from "./LinkButton"

const Button = Object.assign(ButtonBase, {
  Group: ButtonGroup,
})

export default Button
