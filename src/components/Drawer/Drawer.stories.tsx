import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Drawer from "components/Drawer"

export default {
  title: "Data Display/Drawer",
  component: Drawer,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)}>open!</button>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
          <div>123</div>
        </div>
      </Drawer>
    </div>
  )
}
