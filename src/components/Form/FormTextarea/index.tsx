import React, { useContext, useEffect, useState } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import { FormControlProps } from "../types"
import cx from "classnames"
import styled from "./FormTextarea.module.scss"

export type FormTextareaProps = FormControlProps & JSX.IntrinsicElements["textarea"]
export type FormTextareaRef = React.Ref<HTMLTextAreaElement>
const FormTextarea = React.forwardRef(function FormTextarea(
  { className, ...props }: FormTextareaProps,
  ref: FormTextareaRef = null,
) {
  const { attributes, setAttributes } = useContext(FormGroupContext)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    setAttributes({
      entered,
      disabled: !!props.disabled,
      readOnly: !!props.readOnly,
      variant: props.variant,
    })
  }, [entered, props.disabled, props.readOnly, props.variant])

  return (
    <div
      className={cx("component-textarea", styled.wrapper, {
        [styled.entered]: entered,
        [styled.disabled]: !!props.disabled,
        [styled["read-only"]]: !!props.readOnly,
      },
      styled[props.variant || ""])}>
      <textarea
        {...props}
        ref={ref}
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

export default FormTextarea
