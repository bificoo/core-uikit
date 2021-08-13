import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tooltip, { TooltipProps } from "./index"
import React from "react"

export default {
  title: "Components/Tooltip",
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
    <>
      text
      <Tooltip on="click">
        <Tooltip.Toggle>
          <Button variant="primary">Hover over me</Button>
        </Tooltip.Toggle>
        <Tooltip.Body>Design System Tooltip</Tooltip.Body>
      </Tooltip>
    </>
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
