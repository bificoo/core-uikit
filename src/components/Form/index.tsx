import FormInput from "./FormInput"
export type { FormInputProps } from "./FormInput"

import FormTextarea from "./FormTextarea"
export type { FormTextareaProps } from "./FormTextarea"

import FormCheck from "./FormCheck"
export type { FormCheckProps } from "./FormCheck"

const Form = {
  Input: FormInput,
  Textarea: FormTextarea,
  Check: FormCheck,
}

export default Form
