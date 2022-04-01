import React, { useEffect, useState } from 'react'
import styled from "./ProgressCircle.module.scss"
import { WithComponent } from "types/common"

const PERCENT_MAX = 100
const DEFAULT_SIZE = 97
const DEFAULT_STROKE_WIDTH = 10
const DEFAULT_CIRCLE_COLOR = "#EBECF0"

export type ProgressCircleProps = {
  /**
   * The percentage of the progress circle.
   */
  percent: number
  /**
   * The coulor of the progress circle.
   */
  progressCircleColor?: string
} & WithComponent

const ProgressCircle = ({
  percent,
  progressCircleColor = "#557CC4",
}: ProgressCircleProps) => {
  const center = DEFAULT_SIZE / 2
  const radius = DEFAULT_SIZE / 2 - DEFAULT_STROKE_WIDTH / 2
  const circumference = 2 * Math.PI * radius
  const alignPercent = percent > PERCENT_MAX ? PERCENT_MAX : percent
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    const progressOffset = ((100 - alignPercent) / 100) * circumference
    setOffset(progressOffset)
}, [setOffset, circumference, alignPercent, offset])

  return (
    <svg className={styled.svg} width={DEFAULT_SIZE} height={DEFAULT_SIZE}>
      <circle
        className={styled["svg-circle-bg"]}
        stroke={DEFAULT_CIRCLE_COLOR}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={DEFAULT_STROKE_WIDTH}
      />
      <circle
        strokeDashoffset={offset}
        className={styled["svg-circle"]}
        stroke={progressCircleColor}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={DEFAULT_STROKE_WIDTH}
        strokeDasharray={circumference}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text className={styled["svg-circle-text"]} x={center + 5}  y={center + 5}>
        {percent}%
      </text>
    </svg>
  )
}

export default ProgressCircle
