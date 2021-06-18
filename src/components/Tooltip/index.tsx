import React, { useRef, MutableRefObject } from "react"
import cx from "classnames"
import style from "./Tooltip.module.scss"
import { usePopper } from "react-popper"
import { Placement } from "@popperjs/core"

export interface TooltipProps extends JSXProps.DivElement {
  className?: string
  children: React.ReactNode
  content?: string
  position?: Placement
}

const Tooltip = ({ className, children, content, position }: TooltipProps): JSX.Element => {
  const targetRef = useRef(null)
  const popperRef = useRef(null)
  const { styles, attributes } = usePopper(targetRef.current, popperRef.current, {
    placement: position,
  })

  return (
    <>
      <div ref={targetRef}>{children}</div>
      <div
        className={cx(style.wrapper, className)}
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}>
        {content}
      </div>
    </>
  )
}

export default Tooltip
