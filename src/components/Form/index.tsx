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

import FormFeedback from "./FormFeedback"
export type { FormFeedbackProps } from "./FormFeedback"

import FormGroup from "./FormGroup"
export type { FormGroupProps } from "./FormGroup"

import InputGroup, { Prepend, Append } from "./InputGroup"
export type { InputGroupProps, PrependProps, AppendProps } from "./InputGroup"

const Form = Object.assign(FormBase, {
  Label: FormLabel,
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  Radio: FormRadio,
  Feedback: FormFeedback,
  Group: FormGroup,
})

export { InputGroup, Prepend, Append, FormInput }
export default Form
