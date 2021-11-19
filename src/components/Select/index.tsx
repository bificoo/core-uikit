import cx from "classnames"
import React, { useState, useRef, CSSProperties } from "react"
import styled from "./Select.module.scss"
import { ReactComponent as ClearIcon } from "./clear.svg"
import { ReactComponent as DownArrowIcon } from "./down-arrow.svg"
import { ReactComponent as RemoveIcon } from "./remove.svg"
import Popup from "reactjs-popup"
import { PopupActions } from "reactjs-popup/dist/types"
import Option from "./Option"

export type SelectProps = {
  isMulti?: boolean
  placeholder?: string
  defaultValue?: OptionType
  style?: CSSProperties
  disabled?: boolean
  onChange?: (
    e: React.MouseEvent<Element, MouseEvent>,
    {
      selected,
      selectedList,
    }: {
      selected: ReactProps.EventKey | null
      selectedList: ReactProps.EventKey[]
    },
  ) => void
} & ReactProps.Component

export type OptionType = {
  value: string
  eventKey: ReactProps.EventKey
}

const Select = ({ isMulti = false, ...props }: SelectProps) => {
  const popupRef = useRef<PopupActions | null>(null)
  const [selected, setSelected] = useState<Array<OptionType>>(
    props.defaultValue ? [props.defaultValue] : [],
  )

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>, option: OptionType) => {
    if (isMulti) {
      const newSelected = selected.map(option => option.eventKey).concat(option.eventKey)
      setSelected([...selected, option])

      props.onChange && props.onChange(e, { selected: option.eventKey, selectedList: newSelected })
    } else {
      setSelected([option])
      props.onChange &&
        props.onChange(e, { selected: option.eventKey, selectedList: [option.eventKey] })
    }
    popupRef.current?.close()
  }

  const handleClear = (e: React.MouseEvent<Element, MouseEvent>) => {
    setSelected([])
    props.onChange && props.onChange(e, { selected: null, selectedList: [] })
  }

  const handleRemoveItem = (e: React.MouseEvent<Element, MouseEvent>, item: OptionType) => {
    const newSelected = selected.filter(option => option.eventKey !== item.eventKey)
    setSelected(newSelected)
    props.onChange &&
      props.onChange(e, {
        selected: null,
        selectedList: newSelected.map(option => option.eventKey),
      })
  }

  return (
    <div className={cx(styled.wrapper, props.className)} style={props.style}>
      <div className={styled.container}>
        <Popup
          ref={popupRef}
          trigger={open => (
            <div className={cx(styled.control, { [styled.active]: open })}>
              {props.placeholder && selected.length === 0 && (
                <div className={styled.placeholder}>{props.placeholder}</div>
              )}

              <div className={styled["vale-container"]}>
                {isMulti ? (
                  <>
                    {selected.map((item, index) => (
                      <div key={index} className={styled["multi-value"]}>
                        <div className={styled.label}>{item.value}</div>
                        <div className={styled.remove} onClick={e => handleRemoveItem(e, item)}>
                          <RemoveIcon />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {selected.map((item, index) => {
                      return (
                        <div key={index} className={styled["single-value"]}>
                          <div className={styled.label}>{item.value}</div>
                        </div>
                      )
                    })}
                  </>
                )}
              </div>
              <div className={styled.indicator}>
                {isMulti && selected.length > 0 && (
                  <div className={styled["clear-indicator"]} onClick={handleClear}>
                    <span>
                      <ClearIcon />
                    </span>
                  </div>
                )}
                <div className={styled["dropdown-indicator"]}>
                  <DownArrowIcon />
                </div>
              </div>
            </div>
          )}
          position="bottom left"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
          disabled={props.disabled}
          contentStyle={{
            border: "none",
            paddingTop: "8px",
            boxShadow: "none",
          }}>
          <div className={styled.menu} style={props.style}>
            {React.Children.map(props.children, child => {
              if (!React.isValidElement(child)) return

              if (isMulti && child.type === Option) {
                if (selected.map(option => option.eventKey).indexOf(child.props.eventKey) === -1) {
                  return React.cloneElement(child, { onClick: handleClick })
                }
              } else {
                return React.cloneElement(child, { onClick: handleClick })
              }
            })}
          </div>
        </Popup>
      </div>
    </div>
  )
}

Select.Option = Option

export default Select
