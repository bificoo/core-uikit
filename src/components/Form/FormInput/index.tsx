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
  //     as,
  //     entered,
  //     isValid,
  //     isInvalid,
  //     type: props.type,
  //     disabled: !!props.disabled,
  //     readOnly: !!props.readOnly,
  //     multiple: !!props.multiple,
  //   });
  // }, [
  //   as,
  //   entered,
  //   isValid,
  //   isInvalid,
  //   props.type,
  //   props.disabled,
  //   props.readOnly,
  //   props.multiple,
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

  // if (Component === "input") {
  // } else if (Component === "textarea") {
  //   const textareaProps = props as JSXProps.TextareaElement;
  //   const textareaRef = ref as React.RefObject<HTMLTextAreaElement>;
  //   return (
  //     <div
  //       className={cx("comp-control", style.wrapper, style.textarea, {
  //         [style.focused]: focused,
  //         [style.entered]: entered,
  //         [style.disabled]: !!props.disabled,
  //         [style["read-only"]]: !!props.readOnly,
  //         // [style.multiple]: !!props.multiple,
  //         [style["is-valid"]]: isValid,
  //         [style["is-invalid"]]: isInvalid,
  //       })}
  //     >
  //       <textarea
  //         {...textareaProps}
  //         ref={textareaRef}
  //         id={id || attributes.controlId}
  //         className={cx(style.control, className)}
  //         onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //           if (e.target.value.trim() === "") setEntered(false);
  //           else setEntered(true);
  //           props.onChange && props.onChange(e);
  //         }}
  //         onFocus={(e) => {
  //           setFocused(true);
  //           props.onFocus && props.onFocus(e);
  //         }}
  //         onBlur={(e) => {
  //           setFocused(false);
  //           props.onBlur && props.onBlur(e);
  //         }}
  //       />
  //     </div>
  //   );
  // }
})

export default FormInput
