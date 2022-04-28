import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Drawer from "components/Drawer"
import Button from "components/Button"

export default {
  title: "General/Drawer",
  component: Drawer,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const [openDefault, setOpenDefault] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpenDefault(!openDefault)}>Open Drawer</Button>
      <Drawer
        open={openDefault}
        onClose={() => {
          console.log("close!")
          setOpenDefault(!openDefault)
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
        onClose={() => {
          console.log("close!")
          setOpenSize(!openSize)
        }}
        size="50%">
        <div>content</div>
      </Drawer>
    </div>
  )
}
