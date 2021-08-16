import TabsBase from "./Tabs"
export type { TabsProps } from "./Tabs"

import Tab from "./Tab"
export type { TabProps } from "./Tab"

const Tabs = Object.assign(TabsBase, {
  Tab,
})

export default Tabs
