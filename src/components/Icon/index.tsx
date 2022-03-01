import Svg from "./svg"
import cx from "classnames"
import styled from "./Icon.module.scss"
import { WithClassName, WithStyle } from "types/common"

export type IconProps = {
  /**
   * Fill in the icon name.
   */
  name: string
} & WithClassName & WithStyle

export const Icon = (props: IconProps) => {
  const camelCased = props.name.replace(/-([a-z])/g, g => g[1].toUpperCase())
  const compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)

  const compareIcon: { [key: string]: JSX.Element } = {
    'ArrowUp': <Svg.ArrowUp />,
    'ArrowDown': <Svg.ArrowDown />,
    'ArrowLeft': <Svg.ArrowLeft />,
    'ArrowRight': <Svg.ArrowRight />,
    'Search': <Svg.Search />,
    'Group': <Svg.Group />,
    'Information': <Svg.Information />,
    'Cross': <Svg.Cross />,
    'Calendar': <Svg.Calendar />,
    'UpTriangle': <Svg.UpTriangle />,
    'DownTriangle': <Svg.DownTriangle />,
    'Dash': <Svg.Dash />,
    'Shortcut': <Svg.Shortcut />,
  }

  return (
    <div className={cx({ [styled.arrowWrapper]: compName.includes("Arrow") }, props.className)} style={{ display: "flex", ...props.style }}>
      {compareIcon[compName]}
    </div>
  )
}

export default Icon
