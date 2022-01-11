import cx from "classnames"
import styled from "./FormFieldset.module.scss"

export type FormFieldsetProps = {
  inline?: boolean
} & JSXProps.FieldsetElement

const FormFieldset = ({ inline = false, className, ...props }: FormFieldsetProps) => {
  return (
    <fieldset className={cx(styled.wrapper, { [styled.inline]: inline }, className)} {...props}>
      {props.children}
    </fieldset>
  )
}

export default FormFieldset
