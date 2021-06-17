import React, { useContext, useEffect, useState } from "react"
import FormContext from "components/Form/FormContext"
import { FormControlProps } from "../types"
import cx from "classnames"
import style from "./FormInput.module.scss"

export type FormInputProps = FormControlProps & JSXProps.InputElement
export type FormInputRef = React.Ref<HTMLInputElement>
const FormInput = React.forwardRef(function FormInput(
  { id, className, type = "text", ...props }: FormInputProps,
  ref: FormInputRef = null,
) {
  const { attributes, setAttributes } = useContext(FormContext)
  const [entered, setEntered] = useState(false)

  // useEffect(() => {
  //   setAttributes({
  //     ...attributes,
  //     entered,
  //     isValid,
  //     isInvalid,
  //     disabled: !!props.disabled,
  //     readOnly: !!props.readOnly,
  //   });
  // }, [
  //   entered,
  //   isValid,
  //   isInvalid,
  //   props.disabled,
  //   props.readOnly,
  // ]);

  return (
    <div
      className={cx("comp-control", style.wrapper, {
        [style.entered]: entered,
        [style.disabled]: !!props.disabled,
        [style["read-only"]]: !!props.readOnly,
        // [style["is-valid"]]: isValid,
        // [style["is-invalid"]]: isInvalid,
      })}>
      <input
        {...props}
        ref={ref}
        type={type}
        id={id || attributes.controlId}
        className={cx(style.control, className)}
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
