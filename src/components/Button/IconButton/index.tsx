import React from "react"
import Icon from "components/Icon"
import Button, { ButtonProps } from "components/Button/Button"

export type IconButtonProps = {
  appendIcon?: boolean
} & ButtonProps

const IconButton = ({ appendIcon = false, ...props }: IconButtonProps) => {
  if (!appendIcon) return <Button {...props} />

  const iconConfig = { leftIcon: false, rightIcon: false }
  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    if (child.type === Icon.Arrow) {
      if (index === 0) iconConfig.leftIcon = true
      else iconConfig.rightIcon = true
    }
  })

  const customChildren: React.ReactElement[] = []
  React.Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child) && child.type === Icon.Arrow) {
      customChildren.push(
        React.cloneElement(child, {
          ...child.props,
          style: index === 0 ? { marginRight: "4px" } : { marginLeft: "4px" },
        }),
      )
    } else customChildren.push(React.isValidElement(child) ? child : <div>{child}</div>)
  })

  return (
    <Button
      style={{
        ...(iconConfig.leftIcon && { paddingLeft: "8px" }),
        ...(iconConfig.rightIcon && { paddingRight: "8px" }),
      }}
      {...props}>
      {customChildren}
    </Button>
  )
}

export default IconButton
