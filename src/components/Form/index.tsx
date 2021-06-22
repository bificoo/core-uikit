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

import FormGroup from "./FormGroup"
export type { FormGroupProps } from "./FormGroup"

const Form = {
  Label: FormLabel,
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  Radio: FormRadio,
  Group: FormGroup,
}

export default Form
