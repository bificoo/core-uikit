import { WithChildren } from "types/common"
import styled from "./FormHorizontal.module.scss"

const FormHorizontal = (props: WithChildren) => {
  return <div className={styled.wrapper}>{props.children}</div>
}

export default FormHorizontal
