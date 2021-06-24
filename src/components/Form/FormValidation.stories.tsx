import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Form from "components/Form"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

export default {
  title: "Example/Form/Validation",
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const HorizontalForm: Story = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
  console.log(watch("email"))
  return (
    <Form labelWidth={100} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group formId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Input {...register("email")} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group formId="password">
        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          placeholder="Password"
          {...register("email", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
