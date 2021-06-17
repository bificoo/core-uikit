import React from "react"

const FormContext = React.createContext({
  attributes: {
    controlId: "",
    as: "input",
    type: "text",
    disabled: false,
    readOnly: false,
    multiple: false,
  },
  setAttributes: () => {
    return
  },
})

export default FormContext
