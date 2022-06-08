import styled from "./Avatar.module.scss"
import { WithChildren, WithStyle, WithComponent } from "types/common"
import cx from "classnames"

export type AvatarProps = WithStyle & WithChildren & WithComponent

const Avatar = (props: AvatarProps) => {
  const defaultAvatar = (
    <div className={styled["default-avatar"]}>
      <svg width="22" height="22" viewBox="0 0 24 24" role="presentation">
        <g fill="currentColor" fillRule="evenodd">
          <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </g>
      </svg>
    </div>
  )
  return (
    <div className={cx(styled.circle, props.className)} style={props.style}>
      {props.children ? props.children : defaultAvatar}
    </div>
  )
}

export default Avatar
