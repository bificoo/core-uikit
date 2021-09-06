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
      <Breadcrumbs.Item href="/item" text="item 1" />
      <Breadcrumbs.Item href="/item" text="item 2" />
      <Breadcrumbs.Item href="/item" text="item 3" />
    </Breadcrumbs>
  )
}

export const Secondary: Story = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/item" text="item 1" />
      <Breadcrumbs.Item href="/item" text="item 2" />
      <Breadcrumbs.Item text="item 3" />
    </Breadcrumbs>
  )
}
