import React from "react"

const FormContext = React.createContext({
  attributes: {
    controlId: "",
    entered: false,
    disabled: false,
    readOnly: false,
    isValid: null,
    isInvalid: null,
  },
  setAttributes: () => {
    return
  },
})

export default FormContext
