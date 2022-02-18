import { useMemo } from "react"
import Image from "./svg"
import cx from "classnames"
import styled from "./Icon.module.scss"
import { WithClassName, WithStyle } from "types/common"

export const Icon = (props: { type: string } & WithClassName & WithStyle) => {
  const camelCased = props.type.replace(/-([a-z])/g, g => g[1].toUpperCase())
  const compName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)

  const filterIcon = useMemo(() => {
    switch (compName) {
      case 'ArrowUp':
        return <Image.ArrowUp />
      case 'ArrowDown':
        return <Image.ArrowDown />
      case 'ArrowLeft':
        return <Image.ArrowLeft />
      case 'ArrowRight':
        return <Image.ArrowRight />
      case 'Search':
        return <Image.Search />
      case 'Group':
        return <Image.Group />
      case 'User':
        return <Image.User />
      case 'Information':
        return <Image.Information />
      default:
        return null
    }
  }, [compName])

  return (
    <div className={cx({ [styled.arrowWrapper]: compName.includes("Arrow") }, props.className)} style={{ display: "flex", ...props.style }}>
      {filterIcon}
    </div>
  )
}

export default Icon
