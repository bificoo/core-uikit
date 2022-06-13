import TooltipBase from "./Tooltip"

import TooltipToggle from "./TooltipToggle"
import TooltipBody from "./TooltipBody"

export type { TooltipProps, TooltipActions } from "./Tooltip"
export type { TooltipToggleProps } from "./TooltipToggle"

const Tooltip = Object.assign(TooltipBase, {
  Toggle: TooltipToggle,
  Body: TooltipBody,
})

export default Tooltip
