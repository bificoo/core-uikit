import { Meta } from "@storybook/react"

import FormMessage from "./FormMessage"
import Form from "components/Form"

export default {
  title: "Data Entry/Form.Message",
  component: FormMessage,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const HelperMessage = () => <Form.HelperMessage>I am helper message.</Form.HelperMessage>
export const ValidMessage = () => <Form.ValidMessage>I am valid message.</Form.ValidMessage>
export const ErrorMessage = () => <Form.ErrorMessage>I am error message.</Form.ErrorMessage>
