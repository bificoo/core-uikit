import styled from "./Progress.module.scss"
import { WithComponent } from "types/common"

const PERCENT_MAX = 100

export type ProgressProps = {
  /** Progress percent between <code>0-100</code> */
  percent: number
} & WithComponent

const Progress = (props: ProgressProps) => {
  const alignPercent = props.percent > PERCENT_MAX ? PERCENT_MAX : props.percent
  return (
    <div className={styled.wrapper}>
      <div className={styled["progress-bar"]}>
        <div className={styled.inner} style={{ width: `${alignPercent}%` }} />
      </div>
      <div className={styled.percent}>{props.percent}%</div>
    </div>
  )
}

export default Progress
