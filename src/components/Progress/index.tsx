import ProgressCircle from "./ProgressCircle"
import ProgressBar from "./ProgressBar"

export type { ProgressCircleProps } from "./ProgressCircle"
export type { ProgressBarProps } from "./ProgressBar"

const Progress = Object.assign({}, { Bar: ProgressBar, Circle: ProgressCircle })

export default Progress
