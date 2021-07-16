import * as React from "react"
import UIButton, { ButtonProps } from "components/Button"

declare module "core-uikit" {
  export default class Button extends UIButton<ButtonProps> {
    variant: "primary" | "secondary" | "important"
    block: boolean
    className: string | undefined
    render: () => React.ReactElement
  }
}
