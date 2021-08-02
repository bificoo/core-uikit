import { Story, Meta } from "@storybook/react"
import Tabs, { TabsProps } from "components/Tabs"

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} as Meta

export const Default: Story<TabsProps> = () => {
  const style = {
    alignItems: "center",
    backgroundColor: "#f4f5f7",
    borderRadius: "3px",
    color: "#6b778c",
    display: "flex",
    fontSize: "4em",
    fontWeight: 500,
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: "8px",
    marginTop: "16px",
    padding: "32px",
  }

  return (
    <Tabs defaultActiveKey="Tab1">
      <Tabs.Tab title="Tab1" eventKey="Tab1">
        <div style={style}>One</div>
      </Tabs.Tab>
      <Tabs.Tab title="Tab2" eventKey="Tab2">
        <div style={style}>Two</div>
      </Tabs.Tab>
      <Tabs.Tab title="Tab3" eventKey="Tab3">
        <div style={style}>Three</div>
      </Tabs.Tab>
    </Tabs>
  )
}
