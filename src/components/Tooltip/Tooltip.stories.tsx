import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tooltip, { TooltipProps } from "./index"

export default {
  title: "General/Tooltip",
  component: Tooltip,
  subcomponents: {
    "Tooltip.Toggle": Tooltip.Toggle,
    "Tooltip.Body": Tooltip.Body,
  },
  argTypes: {
    on: {
      description: "Events triggering the tooltip.",
      table: {
        type: {
          summary: "click | hover",
        },
        defaultValue: { summary: "hover" },
      },
      control: false,
    },
    position: {
      description: "Position for the tooltip.",
      table: {
        type: {
          summary:
            "top left | top right | bottom right | bottom left | right center | left center | top center | bottom center | center center",
        },
        defaultValue: { summary: "bottom center" },
      },
      control: false,
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
        <Button variant="primary">Click me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}

export const LongText: Story<TooltipProps> = () => {
  return (
    <Tooltip on="click" position="bottom center">
      <Tooltip.Toggle>
        <Button variant="primary">Click me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>
        有進行存款且投注過的行為用戶，依據距離上次行為天數的遠近、頻率的高低、金額的高低來劃分成8個用戶群體。
      </Tooltip.Body>
    </Tooltip>
  )
}

export const BodyStyle: Story<TooltipProps> = () => {
  return (
    <Tooltip position="right center">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body style={{ background: "pink", borderColor: "purple" }}>
        Design System Tooltip
      </Tooltip.Body>
    </Tooltip>
  )
}

export const Prefix: Story<TooltipProps> = () => {
  return (
    <Tooltip on="click" position="right center" prefix="test">
      <Tooltip.Toggle>
        <Button variant="primary">Hover over me</Button>
      </Tooltip.Toggle>
      <Tooltip.Body>Design System Tooltip</Tooltip.Body>
    </Tooltip>
  )
}
