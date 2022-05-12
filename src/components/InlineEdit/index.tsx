import React, { useLayoutEffect, useRef } from "react"
import styled from "./InlineEdit.module.scss"
import Icon from "components/Icon"
import Button from "components/Button"
import usePrevious from "hooks/usePrevious"
import {
  offset,
  autoUpdate,
  useFloating,
  useClick,
  useRole,
  useDismiss,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react-dom-interactions"

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
  editView: (ref: React.MutableRefObject<HTMLInputElement | null>) => React.ReactNode
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
  const editViewRef = useRef<HTMLInputElement | null>(null)
  const inlineEditRef = useRef(null)

  const { x, y, reference, floating, strategy, context } = useFloating({
    open: props.editing,
    onOpenChange: props.onCancel,
    placement: "bottom-end",
    middleware: [offset(6)],
    whileElementsMounted: autoUpdate,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      toggle: false,
    }),
    useRole(context),
    useDismiss(context),
  ])

  const prevEditing = usePrevious(props.editing)
  useLayoutEffect(() => {
    if (prevEditing !== props.editing && props.editing) {
      editViewRef.current && (editViewRef.current.value = props.defaultValue || "")
    }
  }, [props.editing, props.defaultValue])

  const referenceProps = getReferenceProps({ ref: reference })
  const floatingProps = getFloatingProps({
    className: styled.buttons,
    ref: floating,
    style: {
      position: strategy,
      top: y ?? "",
      left: x ?? "",
      zIndex: "5",
    },
  })

  const handleConfirm = () => {
    if (editViewRef?.current?.value || editViewRef?.current?.value === "") {
      props.onConfirm(editViewRef?.current?.value)
    }
  }

  return (
    <div ref={inlineEditRef}>
      {props.editing ? (
        <div>
          <div {...referenceProps}>{props.editView(editViewRef)}</div>
          <FloatingPortal>
            <div {...floatingProps}>
              <Button variant="secondary" className={styled.check} onClick={handleConfirm}>
                <Icon name="check" width={16} height={16} className={styled.icon} />
              </Button>
              <Button variant="secondary" className={styled.cross} onClick={props.onCancel}>
                <Icon name="cross" width={16} height={16} />
              </Button>
            </div>
          </FloatingPortal>
        </div>
      ) : (
        props.readView()
      )}
    </div>
  )
}

export default InlineEdit
