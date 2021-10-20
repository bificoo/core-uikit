import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Modal from "components/Modal/index"
export default {
  title: "General/Modal",
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const AlertModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Alert Modal
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
        Open Confirm Modal
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

export const FunctionalAlertModal: Story = () => {
  return (
    <>
      <Button
        variant="primary"
        onClick={() =>
          Modal.alert({
            title: "注意",
            confirmText: "確定",
            content: "點擊確定即可關閉",
          })
        }>
        Open Functional Alert Modal
      </Button>
    </>
  )
}

export const FunctionalConfirmModal: Story = () => {
  return (
    <>
      <Button
        variant="primary"
        onClick={() =>
          Modal.alert({
            title: "確認",
            confirmText: "確定",
            cancelText: "取消",
            content: "確定要刪除嗎？",
          })
        }>
        Open Functional Confirm Modal
      </Button>
    </>
  )
}
