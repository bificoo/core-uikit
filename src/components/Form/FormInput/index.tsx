import React, { useContext, useEffect, useState } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import { FormControlProps } from "../types"
import cx from "classnames"
import styled from "./FormInput.module.scss"
import { WithClassName } from "types/common"

export type FormInputProps = FormControlProps & WithClassName &
  Omit<JSX.IntrinsicElements["input"], "type" | "css"> & {
    /**
     * Specify the type of the
     */
    type?: "text" | "password" | "number"
  }

const FormInput = React.forwardRef(function FormInput(
  { className, type = "text", ...props }: FormInputProps,
  ref: React.Ref<HTMLInputElement> = null,
) {
  const { attributes, setAttributes } = useContext(FormGroupContext)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (attributes?.entered === entered &&
      attributes?.disabled === props.disabled &&
      attributes?.readOnly === props.readOnly &&
      attributes?.variant === props.variant) return

    setAttributes({
      entered,
      disabled: props.disabled,
      readOnly: props.readOnly,
      variant: props.variant,
    })
  }, [entered, props.disabled, props.readOnly, props.variant])

  return (
    <div
      className={cx("component-input", styled.wrapper, {
        [styled.entered]: entered,
        [styled.disabled]: !!props.disabled,
        [styled["read-only"]]: !!props.readOnly,
      },
      styled[props.variant || ""])}
      style={props.style}>
      <input
        {...props}
        ref={ref}
        type={type}
        id={attributes?.formId}
        className={cx(styled.control, className)}
        onChange={e => {
          if (e.target.value.trim() === "") setEntered(false)
          else setEntered(true)
          props.onChange && props.onChange(e)
        }}
      />
    </div>
  )
})

export default FormInput
