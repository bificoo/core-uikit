import React from "react"

export type Attributes = {
  formId: string | null
  entered: boolean
  disabled: boolean
  readOnly: boolean
  isValid: boolean | null
  isInvalid: boolean | null
}

export type FormContextProps = {
  attributes?: Attributes
  setAttributes: (attributes: Partial<Attributes>) => void
}

const FormContext = React.createContext<FormContextProps>({
  setAttributes: () => {
    // set attributes
  },
})

export default FormContext
