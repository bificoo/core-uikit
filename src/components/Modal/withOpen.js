import ReactDOM from "react-dom"

export const getPopupRoot = () => {
  let popupRoot = document.getElementById("popup-root")
  if (!popupRoot) {
    popupRoot = document.createElement("div")
    popupRoot.setAttribute("id", "popup-root")
    document.body.appendChild(popupRoot)
  }
  return popupRoot
}

export const isSetModal = () => {
  const popupRoot = getPopupRoot()
  return popupRoot.hasChildNodes()
}

const popupRoot = getPopupRoot()
const root = ReactDOM.createRoot(popupRoot)

function open(Modal, config) {
  function bindClose(config) {
    const { onConfirm, onCancel, onClose, ...theOtherConfig } = config
    const bind = fn =>
      fn
        ? () => {
            typeof fn === "function" && fn()
            close()
          }
        : close

    return {
      ...theOtherConfig,
      onConfirm: bind(onConfirm),
      onCancel: bind(onCancel),
      onClose: bind(onClose),
    }
  }

  function render(config) {
    root.render(<Modal {...bindClose(config)} />)
  }

  function update(newConfig) {
    currentConfig = {
      ...config,
      ...newConfig,
      open: true,
    }
    render(currentConfig)
  }

  function close() {
    render({
      ...config,
      open: false,
    })
  }

  render({
    ...config,
    open: true,
  })

  return {
    destroy: close,
    update,
  }
}

function withAlert(config) {
  return {
    ...config,
    cancelText: null,
  }
}

function withConfirm(config) {
  return {
    ...config,
    cancelText: config.cancelText,
  }
}

export default function withOpen(ModalComponent) {
  ModalComponent.alert = config => open(ModalComponent, withAlert(config))
  ModalComponent.confirm = config => open(ModalComponent, withConfirm(config))
  return ModalComponent
}
