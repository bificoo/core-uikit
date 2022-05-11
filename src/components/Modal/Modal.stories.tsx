import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Modal, { CustomModal } from "components/Modal"
import Header from "components/Modal/ModalHeader"
import Body from "components/Modal/ModalBody"

export default {
  title: "General/Modal",
  component: Modal,
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
          Modal.confirm({
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

export const CustomAllModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Custom Modal
      </Button>
      <CustomModal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            display: "flex",
            flex: "1",
            width: "500px",
            height: "500px",
            background: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          完全客製化彈框，Modal 只負責浮動的邏輯。
          <Button onClick={() => setOpen(false)} style={{ marginTop: "10px" }}>
            關閉
          </Button>
        </div>
      </CustomModal>
    </>
  )
}

export const CustomPartialModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Custom Modal by Module Modal
      </Button>
      <CustomModal open={open} onClose={() => setOpen(false)}>
        <Modal.Dialog>
          <Header title={"部分客製化"} />
          <Body
            style={{
              paddingBottom: "20px",
              height: "200px",
              background: "#eee",
            }}>
            重新組合 Modal 的子元件，可以利用部分模組和客製化其他部分的模組，Header 與 Body
            使用原本的模組組合。
          </Body>
          <footer
            style={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              background: "#eee",
            }}>
            Footer 則是客製化
            <Button onClick={() => setOpen(false)} style={{ marginLeft: "10px" }}>
              關閉
            </Button>
          </footer>
        </Modal.Dialog>
      </CustomModal>
    </>
  )
}

export const LockScrollModal: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Alert Modal
      </Button>
      <Modal
        lockScroll={false}
        title="注意"
        open={open}
        confirmText="確定"
        onClose={() => setOpen(false)}>
        點擊確定即可關閉
      </Modal>
    </>
  )
}
