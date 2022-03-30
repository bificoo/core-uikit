import styled from "./Bar.module.scss"
import { WithComponent } from "types/common"

const PERCENT_MAX = 100

export type ProgressBarProps = {
  percent: number
} & WithComponent

const Bar = (props: ProgressBarProps) => {
  const alignPercent = props.percent > PERCENT_MAX ? PERCENT_MAX : props.percent
  return (
    <>
      <div className={styled["progress-bar"]}>
        <div className={styled.inner} style={{ width: `${alignPercent}%` }} />
      </div>
      <div className={styled.percent}>{props.percent}%</div>
    </>
  )
}

export default Bar
