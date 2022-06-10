import styled from "./Line.module.scss"
import { WithComponent } from "types/common"

export type LineProps = {
  /**
   * The percentage of the progress bar.
   */
  percent: number
  /**
   * The color of the progress circle.
   */
  strokeColor?: string
} & WithComponent

const Line = (props: LineProps) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled["progress-bar"]}>
        <div className={styled.inner} style={{ width: `${props.percent}%` }} />
      </div>
      <div className={styled.percent}>{props.children}%</div>
    </div>
  )
}

export default Line
