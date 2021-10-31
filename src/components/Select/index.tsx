import { useState, useRef } from "react"
import styled from "./Select.module.scss"
import { ReactComponent as ClearIcon } from "./clear.svg"
import { ReactComponent as DownArrowIcon } from "./down-arrow.svg"
import { ReactComponent as RemoveIcon } from "./remove.svg"

export type SelectProps = {
  options: Omit<optionsType, "id">[]
  isMulti: boolean
  placeholder: string
} & ReactProps.Component

type optionsType = { id: number; label: string; value: string }

const useArrayId = (array: Array<Omit<optionsType, "id">>) => {
  return array.map((item, index: number) => ({ ...item, id: index }))
}

const Select = ({ isMulti = false, ...props }: SelectProps) => {
  const initialOptions = useArrayId(props.options)
  const [options, setOptions] = useState(initialOptions)
  const [selected, setSelected] = useState<Array<optionsType>>([])

  const handleClick = (item: optionsType) => {
    if (isMulti) {
      setSelected(prev => (prev?.length > 0 ? [...prev, item] : [item]))
      setOptions(prev => prev.filter(option => option.value !== item.value))
    } else {
      setSelected([item])
    }
  }
  const handleClear = () => {
    setOptions(prev => [...prev, ...selected].sort((a, b) => a.id - b.id))
    setSelected([])
  }

  const handleRemoveItem = (item: optionsType) => {
    setSelected(prev => prev.filter(option => option.value !== item.value))
    setOptions(prev => [...prev, item].sort((a, b) => a.id - b.id))
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.container}>
        <div className={styled.control}>
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

        <div className={styled.menu}>
          {options.map(option => (
            <div key={option.value} className={styled.item} onClick={() => handleClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Select
