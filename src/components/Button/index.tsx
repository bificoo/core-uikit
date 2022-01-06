import ButtonBase, { IconButtonProps } from "./IconButton"
import ButtonGroup from "./ButtonGroup"
import LinkButton from "./LinkButton"

export type ButtonProps = IconButtonProps
export type { ButtonGroupProps } from "./ButtonGroup"
export { LinkButton }
export type { LinkButtonProps } from "./LinkButton"

const Button = Object.assign(ButtonBase, { Group: ButtonGroup })

export default Button
