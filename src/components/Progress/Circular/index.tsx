import React, { useEffect, useState } from 'react'
import styled from "./Circular.module.scss"
import { WithComponent } from "types/common"

const PERCENT_MAX = 100

export type ProgressCircularProps = {
  percent: number
  size?: number,
  strokeWidth?: number,
  circleOneStroke?: string,
  circleTwoStroke?: string
} & WithComponent

const Circular = ({
  percent,
  size = 97,
  strokeWidth = 10,
  circleOneStroke = "#C4C4C4",
  circleTwoStroke = "#557CC4",
}: ProgressCircularProps) => {
  const [offset, setOffset] = useState(0)
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const alignPercent = percent > PERCENT_MAX ? PERCENT_MAX : percent

  useEffect(() => {
    const progressOffset = ((100 - alignPercent) / 100) * circumference
    setOffset(progressOffset)
}, [setOffset, circumference, alignPercent, offset])

  return (
    <svg className={styled.svg} width={size} height={size}>
      <circle
        className={styled["svg-circle-bg"]}
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        strokeDashoffset={offset}
        className={styled["svg-circle"]}
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text className={styled["svg-circle-text"]} x={center + 5}  y={center + 5}>
        {percent}%
      </text>
    </svg>
  )
}

export default Circular
