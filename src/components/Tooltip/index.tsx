import React, { useState } from "react"
import cx from "classnames"
import style from "./Tooltip.module.scss"
import { usePopper } from "react-popper"
import { Placement } from "@popperjs/core"

export type TooltipProps = ReactProps.Component & {
  content?: string
  placement?: Placement
}

const Tooltip = ({ className, children, content, placement }: TooltipProps) => {
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
        className={style.children}
        ref={setReferenceElement}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}>
        {children}
      </div>
      {isVisible && (
        <div
          className={cx(style.wrapper, className)}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}>
          <div id="arrow" className={style.arrow} ref={setArrowRef} style={styles.arrow} />
          {content}
        </div>
      )}
    </>
  )
}

export default Tooltip
