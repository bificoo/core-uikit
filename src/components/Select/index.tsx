import cx from "classnames"
import React, { useState, useRef, useEffect } from "react"
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
  onChange?: (value: OptionType[]) => void
} & ReactProps.Component

export type OptionType = {
  label: string
  value: string | number
}

const Select = ({ isMulti = false, ...props }: SelectProps) => {
  const popupRef = useRef<PopupActions | null>(null)
  const [selected, setSelected] = useState<Array<OptionType>>(
    props.defaultValue ? [props.defaultValue] : [],
  )

  const handleClick = (option: OptionType) => {
    if (isMulti) {
      setSelected(prev => [...prev, option])
    } else {
      setSelected([option])
      popupRef.current?.close()
    }
  }

  const handleClear = () => {
    setSelected([])
  }

  const handleRemoveItem = (item: OptionType) => {
    setSelected(prev => prev.filter(option => option.value !== item.value))
  }

  useEffect(() => {
    props.onChange && props.onChange(selected)
  }, [selected])

  return (
    <div className={styled.wrapper}>
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
                        <div className={styled.label}>{item.label}</div>
                        <div className={styled.remove} onClick={() => handleRemoveItem(item)}>
                          <RemoveIcon />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {selected.map((item, index) => (
                      <div key={index} className={styled["single-value"]}>
                        <div className={styled.label}>{item.label}</div>
                      </div>
                    ))}
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
          contentStyle={{
            border: "none",
            padding: "8px",
            boxShadow: "none",
          }}>
          <div className={styled.menu}>
            {React.Children.map(props.children, child => {
              if (!React.isValidElement(child)) return

              if (
                child.type === Option &&
                selected.map(option => option.value).indexOf(child.props.value) === -1
              ) {
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
