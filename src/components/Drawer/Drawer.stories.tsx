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
  return (
    <div>
      <Button onClick={() => setOpenStyle(!openStyle)}>Open Drawer</Button>
      <Drawer
        open={openStyle}
        onClose={() => setOpenStyle(!openStyle)}
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

export const Size: Story = () => {
  const [openSize, setOpenSize] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpenSize(!openSize)}>Open Drawer</Button>
      <Drawer
        open={openSize}
        onClose={() => setOpenSize(!openSize)}
        size="50%"
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
