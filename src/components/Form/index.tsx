import FormBase from "./Form"
export type { FormProps } from "./Form"

import FormLabel from "./FormLabel"
export type { FormLabelProps } from "./FormLabel"

import FormInput from "./FormInput"
export type { FormInputProps } from "./FormInput"

import FormTextarea from "./FormTextarea"
export type { FormTextareaProps } from "./FormTextarea"

import FormCheckbox from "./FormCheckbox"
export type { FormCheckboxProps } from "./FormCheckbox"

import FormRadio from "./FormRadio"
export type { FormRadioProps } from "./FormRadio"

import { FormHelperMessage, FormValidMessage, FormErrorMessage } from "./FormMessage"
// export type { FormMessageProps } from "./FormMessage"

import FormGroup from "./FormGroup"
export type { FormGroupProps } from "./FormGroup"

import FormDivider from "./FormDivider"
import FormHorizontal from "./FormHorizontal"

import InputGroup, { Prepend, Append } from "./InputGroup"
export type { InputGroupProps, PrependProps, AppendProps } from "./InputGroup"

const Form = Object.assign(FormBase, {
  Label: FormLabel,
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  Radio: FormRadio,
  HelperMessage: FormHelperMessage,
  ValidMessage: FormValidMessage,
  ErrorMessage: FormErrorMessage,
  Group: FormGroup,
  Divider: FormDivider,
  Horizontal: FormHorizontal,
})

export { InputGroup, Prepend, Append }
export default Form
