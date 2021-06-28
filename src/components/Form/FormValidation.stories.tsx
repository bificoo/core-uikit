import { useCallback } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Form from "components/Form"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
  firstName: string
}

export default {
  title: "Example/Form/Validation",
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

let renderCount = 0

export const Default: Story = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = useCallback(data => console.log(data), [])
  renderCount++
  return (
    <Form labelWidth={100} onSubmit={handleSubmit(onSubmit)}>
      <p>renderCount: {renderCount}</p>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Input {...register("email")} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group formId="password">
        <Form.Label required>Password</Form.Label>
        <Form.Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, maxLength: 8 })}
        />
        {errors?.password?.type === "required" && (
          <Form.Feedback>This field is required</Form.Feedback>
        )}
        {errors?.password?.type === "maxLength" && (
          <Form.Feedback>Password cannot exceed 8 characters</Form.Feedback>
        )}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
