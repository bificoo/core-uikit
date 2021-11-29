import cx from "classnames"
import styled from "./FormFieldset.module.scss"

export type FormFieldsetProps = {
  inline?: boolean
} & JSXProps.FieldsetElement

const FormFieldset = ({ inline = false, ...props }: FormFieldsetProps) => {
  return (
    <fieldset className={cx({ [styled.inline]: inline }, props.className)}>
      {props.children}
    </fieldset>
  )
}

export default FormFieldset
