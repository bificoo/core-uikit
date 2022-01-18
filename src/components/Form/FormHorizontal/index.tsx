import styled from "./FormHorizontal.module.scss"
import { WithChildren } from "types/common"

const FormHorizontal = (props: WithChildren) => {
  return <div className={styled.wrapper}>{props.children}</div>
}

export default FormHorizontal
