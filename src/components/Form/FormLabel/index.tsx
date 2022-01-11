import { useContext } from "react"
import { FormGroupContext } from "components/Form/FormContext"
import styled from "./FormLabel.module.scss"
import cx from "classnames"

export type FormLabelProps = JSXProps.LabelElement & {
  required?: boolean
}

const FormLabel = ({ required = false, className, htmlFor, ...props }: FormLabelProps) => {
  const { attributes } = useContext(FormGroupContext)
  return (
    <label
      htmlFor={htmlFor || attributes?.formId}
      className={cx(styled.wrapper, className)}
      {...props}>
      <span className={cx({ [styled.required]: required })}>{props.children}</span>
    </label>
  )
}

export default FormLabel
