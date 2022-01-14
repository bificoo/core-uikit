import { Story, Meta } from "@storybook/react"
import Tree from "components/Tree/index"

export default {
  title: "General/Tree",
  component: Tree,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const eventHandler = (nodes?: string[]) => {
    // 回傳目前所在頁面的全部節點路徑
    console.log("nodes", nodes)
  }

  return (
    <div style={{ width: "240px" }}>
      <Tree onClick={eventHandler} defaultActiveKey="AgeGroup">
        <Tree.Category renderName={"個人資料主題(52)"} eventKey={"I"}>
          <Tree.Category renderName={"個人資料(4)"} eventKey={"I01"}>
            <Tree.Item renderName={"性別"} eventKey={"Gender"} />
            <Tree.Item renderName={"年齡層"} eventKey={"AgeGroup"} />
            <Tree.Category renderName={"Inside(2)"} eventKey={"I099"}>
              <Tree.Item renderName={"Test"} eventKey={"test"} />
              <Tree.Item renderName={"Test2"} eventKey={"test2"} />
            </Tree.Category>
          </Tree.Category>
          <Tree.Category renderName={"生存資料(10)"} eventKey={"I03"}>
            <Tree.Item renderName={"三十日內活躍天數"} eventKey={"ActiveDayL30d"} />
            <Tree.Item renderName={"七日內活躍天數"} eventKey={"ActiveDayL7d"} />
            <Tree.Item renderName={"生涯活躍天數"} eventKey={"ActiveDayLifetime"} />
            <Tree.Item renderName={"三十日內投注存款天數"} eventKey={"BetOrDepositDayCountL30d"} />
          </Tree.Category>
          <Tree.Category renderName={"用戶價值(1)"} eventKey={"I06"}>
            <Tree.Item renderName={"AG捕魚用戶價值"} eventKey={"UserAgFishingRFMLifetime"} />
          </Tree.Category>
        </Tree.Category>
        <Tree.Category renderName={"優惠與活動主題(10)"} eventKey={"P"}>
          <Tree.Category renderName={"優惠活動(9)"} eventKey={"P01"}>
            <Tree.Item
              renderName={"完善訊息參與度"}
              eventKey={"DepositPromotionJoinPercentageLifetime"}
            />
          </Tree.Category>
        </Tree.Category>
      </Tree>
    </div>
  )
}
