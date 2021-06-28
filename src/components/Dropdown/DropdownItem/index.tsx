import cx from "classnames"
import styled from "./Item.module.scss"

export type DropdownItemProps = {
  className?: string
  children: React.ReactNode
  eventKey?: string
  active?: boolean
  onClick?: (e: React.MouseEvent<Element, MouseEvent>, { eventKey }: { eventKey?: string }) => void
}

const DropdownItem = ({ className, children, eventKey, active, onClick }: DropdownItemProps) => {
  return (
    <div
      className={cx(styled.wrapper, { [styled.active]: active }, className)}
      onClick={e => onClick && onClick(e, { eventKey })}>
      {children}
    </div>
  )
}

export default DropdownItem
