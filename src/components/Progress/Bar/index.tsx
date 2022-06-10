import styled from "./ProgressBar.module.scss"
import { WithComponent } from "types/common"

const PERCENT_MAX = 100

export type BarProps = {
  /**
   * The percentage of the progress bar.
   */
  percent: number
} & WithComponent

const ProgressBar = (props: BarProps) => {
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

export default ProgressBar
