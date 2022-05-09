import React, { useEffect, useRef } from "react"
import styled from "./InlineEdit.module.scss"
import Icon from "components/Icon"
import Button from "components/Button"
import useOutsideEvent from "hooks/useOutsideEvent"

export type InlineEditProps = {
  /**
   * Sets whether the component shows the readView or the editView. This is used to manage the state of the input in stateless inline edit.
   */
  editing: boolean
  /**
   * The user input entered into the field during editView.
   */
  defaultValue: string
  /**
   * The component shown when user is editing (when the inline edit is not in readView).
   */
  editView: (ref: React.Ref<HTMLInputElement>) => React.ReactNode
  /**
   *The component shown when not in editView. This is when the inline edit is read-only and not being edited.
   */
  readView: () => React.ReactNode
  /**
   * Saves and confirms the value entered into the field. It exits editView and returns to readView.
   */
  onConfirm: (value: string) => void
  /**
   * Exits editView and switches back to readView. This is called when the cancel action button (x) is clicked.
   */
  onCancel: () => void
}

const InlineEdit = (props: InlineEditProps) => {
  const editValueRef = useRef<HTMLInputElement>(null)
  const InlineEditRef = useRef(null)

  useEffect(() => {
    if (props.editing && editValueRef.current?.value === "") {
      editValueRef.current.value = props.defaultValue || ""
    }
  }, [props.editing, props.defaultValue])

  useOutsideEvent({
    refs: [InlineEditRef],
    onClickOutside: () => {
      props.onCancel()
    },
  })

  const handleConfirm = () => {
    if (editValueRef?.current?.value || editValueRef?.current?.value === "") {
      props.onConfirm(editValueRef?.current?.value)
    }
  }

  return (
    <div ref={InlineEditRef}>
      {props.editing ? (
        <div>
          <div>{props.editView(editValueRef)}</div>
          <div className={styled.buttons}>
            <Button variant="secondary" className={styled.check} onClick={handleConfirm}>
              <Icon name="check" width={16} height={16} className={styled.icon} />
            </Button>
            <Button variant="secondary" className={styled.cross} onClick={props.onCancel}>
              <Icon name="cross" width={16} height={16} />
            </Button>
          </div>
        </div>
      ) : (
        props.readView()
      )}
    </div>
  )
}

export default InlineEdit
