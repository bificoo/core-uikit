import ButtonBase from "./Button"
export type { ButtonProps } from "./Button"

import ButtonGroup from "./ButtonGroup"
export type { ButtonGroupProps } from "./ButtonGroup"

import LinkButton from "./LinkButton"
export { LinkButton }
export type { LinkButtonProps } from "./LinkButton"

import TextButton from "./TextButton"
export { TextButton }
export type { TextButtonProps } from "./TextButton"

const Button = Object.assign(ButtonBase, {
  Group: ButtonGroup,
})

export default Button
