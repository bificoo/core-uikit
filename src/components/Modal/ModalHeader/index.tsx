import styled from "./ModalHeader.module.scss"

export type ModalHeaderProps = {
  title?: string
} & ReactProps.WithClassName

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <header className={styled.wrapper}>
      <h1>{props.title}</h1>
    </header>
  )
}

export default ModalHeader
