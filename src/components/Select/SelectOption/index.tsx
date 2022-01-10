import styled from "../Select.module.scss"
import { SelectOptionType } from "../index"
import { WithComponent } from "types/common"

export type OptionProps = {
  disabled?: boolean
  value: string
  eventKey: ReactProps.EventKey
  onClick?: (e: React.MouseEvent<Element, MouseEvent>, option: SelectOptionType) => void
} & WithComponent

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
