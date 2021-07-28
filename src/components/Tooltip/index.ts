import TooltipBase from "./Tooltip"
export type { TooltipProps } from "./Tooltip"

import TooltipToggle from "./TooltipToggle"
export type { TooltipToggleProps } from "./TooltipToggle"

import TooltipBody from "./TooltipBody"

const Tooltip = Object.assign(TooltipBase, {
  Toggle: TooltipToggle,
  Body: TooltipBody,
})

export default Tooltip
