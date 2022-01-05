import styled from "./Avatar.module.scss"
import { WithChildren, WithStyle } from "../../types/common"

export type AvatarProps = WithStyle & WithChildren

export const Avatar = (props: AvatarProps) => {
  const defaultAvatar = (
    <div className={styled["default-avatar"]}>
      <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
        <g fill="currentColor" fillRule="evenodd">
          <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </g>
      </svg>
    </div>
  )
  return (
    <div>
      <div className={styled.outer} style={props.style}>
        {props.children ? props.children : defaultAvatar}
      </div>
    </div>
  )
}
