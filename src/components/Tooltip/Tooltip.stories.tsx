import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tooltip, { TooltipProps } from "./index"
import React from "react"

export default {
  title: "General/Tooltip",
  component: Tooltip,
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
    placement: {
      control: {
        type: "select",
        options: ["top", "bottom", "right", "left"],
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: Story<TooltipProps> = () => {
  return (
    <Tooltip>
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const Right: Story<TooltipProps> = () => {
  return (
    <Tooltip position="right center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const Left: Story<TooltipProps> = () => {
  return (
    <Tooltip position="left center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const Top: Story<TooltipProps> = () => {
  return (
    <Tooltip position="top center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const Click: Story<TooltipProps> = () => {
  return (
    <Tooltip on="click" position="bottom center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const LongText: Story<TooltipProps> = () => {
  return (
    <Tooltip on="click" position="bottom center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>
        有進行存款且投注過的行為用戶，依據距離上次行為天數的遠近、頻率的高低、金額的高低來劃分成8個用戶群體。
      </Tooltip.Body>
    </Tooltip>
  )
}
