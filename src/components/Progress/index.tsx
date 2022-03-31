import ProgressCircular from "./ProgressCircular"
import ProgressBar from "./ProgressBar"

export type { ProgressCircularProps } from "./ProgressCircular"
export type { ProgressBarProps } from "./ProgressBar"

const Progress = Object.assign({}, { Bar: ProgressBar, Circular: ProgressCircular })

export default Progress
