import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Form from "components/Form"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback } from "react"

type Inputs = {
  email: string
  password: string
  firstName: string
}

export default {
  title: "Data Entry/Form",
  component: Form,
  argTypes: {},
} as Meta

export const VerticalForm: Story = () => (
  <Form layout="vertical">
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Feedback</Form.Label>
      <Form.Textarea />
    </Form.Group>
    <Form.Group>
      <Form.Label>Sex</Form.Label>
      <Form.Radio name="sex">Male</Form.Radio>
      <Form.Radio name="sex">Female</Form.Radio>
    </Form.Group>
    <Form.Group>
      <Form.Label>Interesting</Form.Label>
      <Form.Checkbox name="sex">Apple</Form.Checkbox>
      <Form.Checkbox name="sex">Orange</Form.Checkbox>
      <Form.Checkbox name="sex">Banana</Form.Checkbox>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export const HorizontalLabelForm: Story = () => (
  <Form labelWidth={100}>
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Feedback</Form.Label>
      <Form.Textarea />
    </Form.Group>
    <Form.Group>
      <Form.Label>Sex</Form.Label>
      <Form.Radio name="sex">Male</Form.Radio>
      <Form.Radio name="sex">Female</Form.Radio>
    </Form.Group>
    <Form.Group>
      <Form.Label>Sex</Form.Label>
      <div>
        <Form.Radio name="sex" inline>
          Male
        </Form.Radio>
        <Form.Radio name="sex" inline>
          Female
        </Form.Radio>
      </div>
    </Form.Group>
    <Form.Group>
      <Form.Label>Interesting</Form.Label>
      <Form.Checkbox name="sex">Apple</Form.Checkbox>
      <Form.Checkbox name="sex">Orange</Form.Checkbox>
      <Form.Checkbox name="sex">Banana</Form.Checkbox>
    </Form.Group>
    <Form.Group>
      <Form.Label>Interesting</Form.Label>
      <div>
        <Form.Checkbox name="sex" inline>
          Apple
        </Form.Checkbox>
        <Form.Checkbox name="sex" inline>
          Orange
        </Form.Checkbox>
        <Form.Checkbox name="sex" inline>
          Banana
        </Form.Checkbox>
      </div>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export const HorizontalForm: Story = () => (
  <Form.Horizontal>
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
    <Form.Divider />
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
  </Form.Horizontal>
)

export const MixedLayoutForm: Story = () => (
  <Form>
    <Form.Group layout="vertical">
      <Form.Label required>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
      <Form.HelperMessage>Email 格式須正確</Form.HelperMessage>
    </Form.Group>
    <Form.Group layout="vertical">
      <Form.Label required>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group layout="vertical">
      <Form.Label required>Feedback</Form.Label>
      <Form.Textarea />
    </Form.Group>
    <Form.Group labelWidth={100}>
      <Form.Label required>Sex</Form.Label>
      <Form.Radio name="sex">Male</Form.Radio>
      <Form.Radio name="sex">Female</Form.Radio>
    </Form.Group>
    <Form.Group labelWidth={100}>
      <Form.Label required>Interesting</Form.Label>
      <Form.Checkbox name="sex">Apple</Form.Checkbox>
      <Form.Checkbox name="sex">Orange</Form.Checkbox>
      <Form.Checkbox name="sex">Banana</Form.Checkbox>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export const Validation: Story = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = useCallback(data => console.log(data), [])
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          {...(["maxLength", "required"].some(el => el === errors?.password?.type)
            ? { variant: "invalid" }
            : {})}
        />
        {errors?.password?.type === "required" && (
          <Form.HelperMessage>This field is required</Form.HelperMessage>
        )}
        {errors?.password?.type === "maxLength" && (
          <Form.ErrorMessage>Password cannot exceed 8 characters</Form.ErrorMessage>
        )}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
