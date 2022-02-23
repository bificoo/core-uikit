import styled from "./Progress.module.scss"
import { WithComponent } from "types/common"

export type ProgressProps = {
  /** Progress percent between <code>0-100</code> */
  percent: number
} & WithComponent

const Progress = (props: ProgressProps) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled["progress-bar"]}>
        <div className={styled.inner} style={{ width: `${props.percent}%` }} />
      </div>
      <div className={styled.percent}>{props.percent}%</div>
    </div>
  )
}

export default Progress
