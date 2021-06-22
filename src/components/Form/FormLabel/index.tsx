import { useContext } from "react"
import FormContext from "components/Form/FormContext"
import style from "./FormLabel.module.scss"
import cx from "classnames"

export type FormLabelProps = JSXProps.LabelElement & {
  required?: boolean
}

const FormLabel = ({ required = false, ...props }: FormLabelProps) => {
  const { attributes } = useContext(FormContext)
  console.info(attributes?.formId)
  return (
    <label
      htmlFor={props.htmlFor || attributes?.formId}
      className={cx(style.wrapper, props.className, {
        [style.required]: required,
      })}>
      {props.children}
    </label>
  )
}

export default FormLabel
