import React, { useContext, useEffect, useState } from "react"
import FormContext from "components/Form/FormContext"
import { FormControlProps } from "../types"
import cx from "classnames"
import style from "./FormTextarea.module.scss"

export type FormTextareaProps = FormControlProps & JSXProps.TextareaElement
export type FormTextareaRef = React.Ref<HTMLTextAreaElement>
const FormTextarea = React.forwardRef(function FormTextarea(
  { id, className, isValid, isInvalid, ...props }: FormTextareaProps,
  ref: FormTextareaRef = null,
) {
  const { attributes, setAttributes } = useContext(FormContext)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setAttributes({
      entered,
      isValid,
      isInvalid,
      disabled: !!props.disabled,
      readOnly: !!props.readOnly,
    })
  }, [entered, isValid, isInvalid, props.disabled, props.readOnly])

  return (
    <div
      className={cx("component-textarea", style.wrapper, {
        [style.entered]: entered,
        [style.disabled]: !!props.disabled,
        [style["read-only"]]: !!props.readOnly,
        [style["is-valid"]]: isValid,
        [style["is-invalid"]]: isInvalid,
      })}>
      <textarea
        {...props}
        ref={ref}
        id={id || attributes?.formId}
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

export default FormTextarea
