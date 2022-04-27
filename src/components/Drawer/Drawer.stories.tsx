import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Drawer from "components/Drawer"
import Button from "components/Button"

export default {
  title: "Data Display/Drawer",
  component: Drawer,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const [openDefault, setOpenDefault] = useState(false)
  console.log("openDefault", openDefault)
  return (
    <div>
      <Button onClick={() => setOpenDefault(!openDefault)}>Open Drawer</Button>
      <Drawer open={openDefault} onClose={() => setOpenDefault(!openDefault)}>
        <div>content</div>
      </Drawer>
    </div>
  )
}

export const Style: Story = () => {
  const [openStyle, setOpenStyle] = useState(false)
  console.log("openStyle", openStyle)

  return (
    <div>
      <Button onClick={() => setOpenStyle(!openStyle)}>Open Drawer</Button>
      <Drawer
        open={openStyle}
        onClose={() => setOpenStyle(!openStyle)}
        size={300}
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div>content</div>
      </Drawer>
    </div>
  )
}
