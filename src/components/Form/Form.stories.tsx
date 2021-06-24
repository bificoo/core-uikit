import { Story, Meta } from "@storybook/react"
import Button from "components/Button"
import Form from "components/Form"
export default {
  title: "Example/Form/Layout",
  argTypes: {
    className: {
      control: false,
    },
  },
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

export const HorizontalForm: Story = () => (
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
      <Form.Label>Interesting</Form.Label>
      <Form.Checkbox name="sex">Apple</Form.Checkbox>
      <Form.Checkbox name="sex">Orange</Form.Checkbox>
      <Form.Checkbox name="sex">Banana</Form.Checkbox>
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export const MixedLayoutForm: Story = () => (
  <Form labelWidth={100}>
    <Form.Group layout="vertical">
      <Form.Label>Email address</Form.Label>
      <Form.Input placeholder="name@example.com" />
    </Form.Group>
    <Form.Group layout="vertical">
      <Form.Label>Password</Form.Label>
      <Form.Input type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group layout="vertical">
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
