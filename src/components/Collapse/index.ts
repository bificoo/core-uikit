import CollapseBase from "./Collapse"
import CollapseHeader from "./CollapseHeader"
import CollapsePanel from "./CollapsePanel"

const Collapse = Object.assign(CollapseBase, {
  Header: CollapseHeader,
  Panel: CollapsePanel,
})

export type { CollapseProps } from "./Collapse"
export default Collapse
