import React from "react"

export type Attributes = Partial<{
  formId: string
  entered: boolean
  disabled: boolean
  readOnly: boolean
  isValid: boolean | null
  isInvalid: boolean | null
}>

export type FormContextProps = {
  attributes?: Attributes
  setAttributes: (attributes: Attributes) => void
}

const FormContext = React.createContext<FormContextProps>({
  setAttributes: () => {
    // set attributes
  },
})

export default FormContext
