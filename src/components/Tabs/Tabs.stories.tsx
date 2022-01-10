import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Tabs, { TabsProps } from "components/Tabs"

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  subcomponents: { Tab: Tabs.Tab },
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

export const ExtraContent: Story<TabsProps> = () => {
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
      extraContent={
        <div style={{ width: "100%", textAlign: "right" }}>2021/11/18 星期五天氣晴</div>
      }
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

export const ControlActiveKey: Story<TabsProps> = () => {
  const [active, setActive] = useState("Tab1")
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
      <div style={{ marginBottom: "20px" }}>
        <Button
          disabled={active === "Tab1"}
          onClick={() => setActive("Tab1")}
          style={{
            marginRight: "10px",
          }}>
          set Tab1 active
        </Button>
        <Button
          disabled={active === "Tab2"}
          onClick={() => setActive("Tab2")}
          style={{
            marginRight: "10px",
          }}>
          set Tab2 active
        </Button>
        <Button disabled={active === "Tab3"} onClick={() => setActive("Tab3")}>
          set Tab3 active
        </Button>
      </div>
      <Tabs
        defaultActiveKey={active}
        activeKey={active}
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
    </>
  )
}
