import { useEffect, useState } from "react"
import { WithComponent } from "types/common"
import styled from "./Circle.module.scss"

// const PERCENT_MAX = 100
const DEFAULT_SIZE = 97
const DEFAULT_STROKE_WIDTH = 10
const DEFAULT_CIRCLE_COLOR = "#EBECF0"

export type CircleProps = {
  /**
   * The percentage of the progress circle.
   */
  percent: number
  /**
   * The color of the progress circle.
   */
  strokeColor?: string
} & WithComponent

const Circle = ({ percent, strokeColor = "#557CC4", ...props }: CircleProps) => {
  const center = DEFAULT_SIZE / 2
  const radius = DEFAULT_SIZE / 2 - DEFAULT_STROKE_WIDTH / 2
  const circumference = 2 * Math.PI * radius
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    const progressOffset = ((100 - percent) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, circumference, percent, offset])

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
        stroke={strokeColor}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={DEFAULT_STROKE_WIDTH}
        strokeDasharray={circumference}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text className={styled["svg-circle-text"]} x={center + 5} y={center + 5}>
        {props.children}%
      </text>
    </svg>
  )
}

export default Circle
