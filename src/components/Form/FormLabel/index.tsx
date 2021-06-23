import { useContext } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import style from "./FormLabel.module.scss"
import cx from "classnames"

export type FormLabelProps = JSXProps.LabelElement & {
  required?: boolean
}

const FormLabel = ({ required = false, className, htmlFor, ...props }: FormLabelProps) => {
  const { attributes } = useContext(FormGroupContext)
  console.info(props)
  return (
    <label
      htmlFor={htmlFor || attributes?.formId}
      className={cx(style.wrapper, className, {
        [style.required]: required,
      })}
      {...props}>
      {props.children}
    </label>
  )
}

export default FormLabel
