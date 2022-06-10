import Circle from "./Circle"
import Line from "./Line"
import { WithComponent } from "types/common"

export type ProgressProps = {
  /**
   * The percentage of the progress bar.
   */
  percent: number
  /**
   * The color of the progress circle.
   */
  strokeColor?: string
  /**
   * Progress type
   */
  type?: "line" | "circle"
} & WithComponent

const PERCENT_MAX = 100

const Progress = ({ type = "line", percent, ...props }: ProgressProps) => {
  return type === "line" ? (
    <Line percent={percent > PERCENT_MAX ? PERCENT_MAX : percent} {...props}>
      {percent}
    </Line>
  ) : (
    <Circle percent={percent > PERCENT_MAX ? PERCENT_MAX : percent} {...props}>
      {percent}
    </Circle>
  )
}

export default Progress
