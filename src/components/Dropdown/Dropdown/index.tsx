import React, { useState, useRef } from "react"
import ReactDOM from "react-dom"
import cx from "classnames"
import { usePopper } from "react-popper"
import { Placement, Options } from "@popperjs/core"
import styled from "./Dropdown.module.scss"
import Menu from "../DropdownMenu"
import ItemComponent from "../DropdownItem"
import Toggle from "../DropdownToggle"

export type DropdownProps = {
  className?: string
  open?: boolean
  onToggle?: React.MouseEventHandler<HTMLElement>
  trigger?: "click" | "hover"
  placement?: Placement
  popperConfig?: Options["modifiers"]
  toggleComponent?: () => JSX.Element
  menuComponent?: () => JSX.Element
  itemComponent?: () => JSX.Element
  children?: React.ReactNode
}

const Dropdown = ({ open = false, trigger = "hover", ...props }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState<boolean>(open)
  const [toggleElement, setToggleElement] = useState<HTMLDivElement | null>(null)
  const [menuElement, setMenuElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes, forceUpdate } = usePopper(toggleElement, menuElement, {
    placement: props.placement,
    modifiers: props.popperConfig || [
      {
        name: "offset",
        options: {
          offset: [-12, 10],
        },
      },
    ],
  })
  const Item = props.itemComponent || ItemComponent

  const handleShow = (show?: boolean) => {
    forceUpdate && forceUpdate()
    if (typeof show !== "undefined") setShow(show)
    else setShow(prev => !prev)
  }

  const handleToggleClick = () => {
    trigger === "click" && handleShow()
  }

  return (
    <div
      className={cx(styled.wrapper, props.className)}
      ref={dropdownRef}
      onMouseOver={() => trigger === "hover" && handleShow(true)}
      onMouseLeave={() => trigger === "hover" && handleShow(false)}>
      {React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return
        if (child.type === Toggle || child.type === props.toggleComponent)
          return React.cloneElement(child, { onClick: handleToggleClick, ref: setToggleElement })

        if (child.type === Menu || child.type === props.menuComponent) {
          const items =
            child.props.children &&
            (Array.isArray(child.props.children) ? child.props.children : [child.props.children])

          return ReactDOM.createPortal(
            <>
              {React.cloneElement(
                child,
                {
                  className: cx(
                    styled.menu,
                    { [styled.show]: show, [styled.hover]: trigger === "hover" },
                    child.props.className,
                  ),
                  style: { ...styles.popper },
                  attributes: attributes.popper,
                  ref: setMenuElement,
                },
                items?.map((item: JSX.Element, idx: number) => {
                  if (item.type === Item || item.type === props.itemComponent) {
                    return (
                      <Item
                        key={idx}
                        {...{
                          ...item.props,
                          onClick: (
                            e: React.MouseEvent<Element, MouseEvent>,
                            { eventKey }: { eventKey?: string },
                          ) => {
                            item.props.onClick && item.props.onClick(e, { eventKey })
                            handleShow()
                          },
                        }}
                      />
                    )
                  } else return item
                }),
              )}
            </>,
            document.body,
          )
        }
      })}
    </div>
  )
}

export default Dropdown
