import React, { useContext, useEffect, useState } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import { FormControlProps } from "../types"
import cx from "classnames"
import styled from "./FormInput.module.scss"

export type FormInputProps = FormControlProps & JSXProps.InputElement
  // Omit<JSXProps.InputElement, "type"> & {
  //   type?: "text" | "password"
  // }
export type FormInputRef = React.Ref<HTMLInputElement>
const FormInput = React.forwardRef(function FormInput(
  { className, type = "text", isValid, isInvalid, ...props }: FormInputProps,
  ref: FormInputRef = null,
) {
  const { attributes, setAttributes } = useContext(FormGroupContext)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setAttributes({
      entered,
      isValid,
      isInvalid,
      disabled: props.disabled,
      readOnly: props.readOnly,
    })
  }, [entered, isValid, isInvalid, props.disabled, props.readOnly])

  return (
    <div
      className={cx("component-input", styled.wrapper, {
        [styled.entered]: entered,
        [styled.disabled]: !!props.disabled,
        [styled["read-only"]]: !!props.readOnly,
        [styled["is-valid"]]: isValid,
        [styled["is-invalid"]]: isInvalid,
      })}>
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
