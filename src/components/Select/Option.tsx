import styled from "./Select.module.scss"
import { OptionType } from "./index"

export type OptionProps = {
  disabled?: boolean
  value: string
  eventKey: ReactProps.EventKey
  onClick?: (e: React.MouseEvent<Element, MouseEvent>, option: OptionType) => void
} & ReactProps.Component

const Option = ({ ...props }: OptionProps) => {
  return (
    <div
      className={styled.item}
      onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
        props.onClick && props.onClick(e, { value: props.value, eventKey: props.eventKey })
      }>
      {props.children}
    </div>
  )
}
export default Option
