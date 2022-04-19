import { Story, Meta } from "@storybook/react"

import Collapse from "components/Collapse"

export default {
  title: "Data Display/Collapse",
  component: Collapse,
  subcomponents: {
    "Collapse.Header": Collapse.Header,
    "Collapse.Panel": Collapse.Panel,
  },
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => {
  return (
    <div>
      <Collapse>
        <Collapse.Header>2021-11-08</Collapse.Header>
        <Collapse.Panel>我是內容我是內容我是內容我是內容我是內容我是內容我是內容</Collapse.Panel>
      </Collapse>
    </div>
  )
}

export const DefaultExpanded: Story = () => {
  return (
    <div>
      <Collapse defaultExpanded>
        <Collapse.Header>2021-11-08</Collapse.Header>
        <Collapse.Panel>我是內容我是內容我是內容我是內容我是內容我是內容我是內容</Collapse.Panel>
      </Collapse>
    </div>
  )
}
