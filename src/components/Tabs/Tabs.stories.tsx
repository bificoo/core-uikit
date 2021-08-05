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
    padding: "32px",
  }

  return (
    <Tabs
      defaultActiveKey="Tab1"
      onSelect={(
        e: React.MouseEvent<Element, MouseEvent>,
        { eventKey }: { eventKey?: ReactProps.EventKey },
      ) => console.info(eventKey)}>
      <Tabs.Tab title="數據指標" eventKey="Tab1">
        <div style={style}>One</div>
      </Tabs.Tab>
      <Tabs.Tab title="圖像報表" eventKey="Tab2">
        <div style={style}>Two</div>
      </Tabs.Tab>
      <Tabs.Tab title="用戶清單" eventKey="Tab3">
        <div style={style}>Three</div>
      </Tabs.Tab>
    </Tabs>
  )
}

export const NoTabContent: Story<TabsProps> = () => {
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
    padding: "32px",
  }

  return (
    <>
      <Tabs
        defaultActiveKey="Tab1"
        onSelect={(
          e: React.MouseEvent<Element, MouseEvent>,
          { eventKey }: { eventKey?: ReactProps.EventKey },
        ) => console.info(eventKey)}>
        <Tabs.Tab title="數據指標" eventKey="Tab1" />
        <Tabs.Tab title="圖像報表" eventKey="Tab2" />
        <Tabs.Tab title="用戶清單" eventKey="Tab3" />
      </Tabs>
      <div style={style}>Content</div>
    </>
  )
}
