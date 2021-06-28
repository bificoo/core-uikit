import React, { useState } from "react"
import ReactDOM from "react-dom"
import cx from "classnames"
import styled from "./Tooltip.module.scss"
import { usePopper } from "react-popper"
import { BasePlacement } from "@popperjs/core"

export type TooltipProps = ReactProps.Component & {
  arrow?: boolean
  content?: string
  placement?: BasePlacement
}

const Tooltip = ({
  arrow = false,
  className,
  children,
  content,
  placement = "bottom",
}: TooltipProps) => {
  const [isVisible, setVisibility] = useState(false)
  const [referenceElement, setReferenceElement] = React.useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null)
  // the ref for the arrow must be a callback ref
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  })

  return (
    <>
      <div
        className={styled.children}
        ref={setReferenceElement}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}>
        {children}
      </div>
      {isVisible &&
        ReactDOM.createPortal(
          <div
            className={cx(styled.wrapper, className)}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}>
            {arrow && (
              <div id="arrow" className={styled.arrow} ref={setArrowRef} style={styles.arrow} />
            )}
            {content}
          </div>,
          document.body,
        )}
    </>
  )
}

export default Tooltip
