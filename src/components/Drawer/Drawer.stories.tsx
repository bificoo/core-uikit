import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Drawer from "components/Drawer"
import Button from "components/Button"

export default {
  title: "General/Drawer",
  component: Drawer,
  argTypes: {},
} as Meta

const contentStyle = {
  alignItems: "center",
  backgroundColor: "#f4f5f7",
  borderRadius: "3px",
  color: "#6b778c",
  display: "flex",
  fontSize: "2em",
  fontWeight: 500,
  flexGrow: 1,
  justifyContent: "center",
  height: "calc(100% - 20px)",
  margin: "10px",
}

export const LayoutHorizontal: Story = () => {
  const [openDefault, setOpenDefault] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpenDefault(!openDefault)}>Open Drawer</Button>
      <Drawer
        open={openDefault}
        onClose={() => {
          setOpenDefault(!openDefault)
        }}>
        <div style={contentStyle}>content</div>
      </Drawer>
    </div>
  )
}

export const LayoutVertical: Story = () => {
  const [openDefault, setOpenDefault] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpenDefault(!openDefault)}>Open Drawer</Button>
      <Drawer
        open={openDefault}
        onClose={() => {
          setOpenDefault(!openDefault)
        }}
        layout="vertical">
        <div style={contentStyle}>content</div>
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
          setOpenSize(!openSize)
        }}
        size="50%">
        <div style={contentStyle}>content</div>
      </Drawer>
    </div>
  )
}

export const Scroll: Story = () => {
  const [openDefault, setOpenDefault] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpenDefault(!openDefault)}>Open Drawer</Button>
      <Drawer
        open={openDefault}
        onClose={() => {
          setOpenDefault(!openDefault)
        }}>
        <div style={{ minHeight: "1000px ", ...contentStyle }}>content</div>
      </Drawer>
    </div>
  )
}
