import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Modal from "components/Modal"
export default {
  title: "Components/Modal",
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const DefaultModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal title="注意" open={open} confirmText="確定" onClose={() => setOpen(false)}>
        點擊確定即可關閉
      </Modal>
    </>
  )
}

export const ConfirmModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="確認"
        open={open}
        confirmText="確定"
        cancelText="取消"
        onClose={() => setOpen(false)}>
        確定要刪除嗎？
      </Modal>
    </>
  )
}
