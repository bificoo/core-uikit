import { Story, Meta } from "@storybook/react"

import Button from "components/Button"
import ButtonGroup from "components/Button/ButtonGroup"

export default {
  title: "General/ButtonGroup",
  component: Button,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default: Story = () => {
  return (
    <div>
      <ButtonGroup
        defaultActiveKey={"daily"}
        onSelect={(
          e: React.MouseEvent<Element, MouseEvent>,
          { eventKey }: { eventKey?: ReactProps.EventKey },
        ) => {
          console.info(eventKey)
        }}>
        <Button selected variant="secondary" eventKey="daily">
          日
        </Button>
        <Button selected variant="secondary" eventKey="weekly">
          周
        </Button>
        <Button selected variant="secondary" eventKey="monthly">
          月
        </Button>
      </ButtonGroup>
    </div>
  )
}
