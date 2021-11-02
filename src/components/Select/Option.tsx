import styled from "./Select.module.scss"
import { OptionType } from "./index"

export type OptionProps = {
  disabled?: boolean
  label: string
  value: string | number
  onClick?: (option: OptionType) => void
} & ReactProps.Component

const Option = ({ ...props }: OptionProps) => {
  return (
    <div
      className={styled.item}
      onClick={() => props.onClick && props.onClick({ label: props.label, value: props.value })}>
      {props.children}
    </div>
  )
}
export default Option
