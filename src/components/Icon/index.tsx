import Image from "./svg"
import cx from "classnames"
import styled from "./Icon.module.scss"
import { WithClassName, WithStyle } from "types/common"

export const Icon = (props: { type: string } & WithClassName & WithStyle) => {
  const camelCased = props.type.replace(/-([a-z])/g, g => g[1].toUpperCase())
  const compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)

  const compareIcon: { [key: string]: JSX.Element } = {
    'ArrowUp': <Image.ArrowUp />,
    'ArrowDown': <Image.ArrowDown />,
    'ArrowLeft': <Image.ArrowLeft />,
    'ArrowRight': <Image.ArrowRight />,
    'Search': <Image.Search />,
    'Group': <Image.Group />,
    'User': <Image.User />,
    'Information': <Image.Information />,
  }

  return (
    <div className={cx({ [styled.arrowWrapper]: compName.includes("Arrow") }, props.className)} style={{ display: "flex", ...props.style }}>
      {compareIcon[compName]}
    </div>
  )
}

export default Icon
