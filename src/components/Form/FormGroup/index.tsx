import { useState } from "react"
import FormContext, { Attributes } from "components/Form/FormContext"
import style from "./FormGroup.module.scss"
import cx from "classnames"

export type FormGroupProps = ReactProps.Component &
  Partial<{
    formId: string
    label: JSX.Element
    layout: "horizontal" | "vertical"
  }>

const FormGroup = ({ layout = "horizontal", ...props }: FormGroupProps) => {
  const [attributes, setAttributes] = useState<Attributes>({
    formId: props.formId,
    entered: false,
    disabled: false,
    readOnly: false,
    isValid: null,
    isInvalid: null,
  })

  const update = (attributes: Partial<Attributes>) => {
    setAttributes(prev => {
      console.info({ ...prev, ...attributes })
      return { ...prev, ...attributes }
    })
  }

  return (
    <FormContext.Provider value={{ attributes, setAttributes: update }}>
      <div className={cx(style.wrapper, style[layout], props.className)}>
        {props.label}
        <div className={style.group}>{props.children}</div>
      </div>
    </FormContext.Provider>
  )
}

export default FormGroup
