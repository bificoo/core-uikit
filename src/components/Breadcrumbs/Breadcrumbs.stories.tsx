import { Story, Meta } from "@storybook/react"
import Breadcrumbs from "components/Breadcrumbs"

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/item">item 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/item">item 2</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/item">item 3</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const Secondary: Story = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/item">item 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/item">item 2</Breadcrumbs.Item>
      <Breadcrumbs.Item>item 3</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
