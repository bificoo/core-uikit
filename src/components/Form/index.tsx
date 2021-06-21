import FormInput from "./FormInput"
export type { FormInputProps } from "./FormInput"

import FormTextarea from "./FormTextarea"
export type { FormTextareaProps } from "./FormTextarea"

import FormCheckbox from "./FormCheckbox"
export type { FormCheckboxProps } from "./FormCheckbox"

import FormRadio from "./FormRadio"
export type { FormRadioProps } from "./FormRadio"

const Form = {
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  Radio: FormRadio,
}

export default Form
