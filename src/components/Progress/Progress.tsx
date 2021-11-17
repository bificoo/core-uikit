import styled from "./Progress.module.scss"

export type ProgressProps = {
  percent: number
} & ReactProps.Component

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
