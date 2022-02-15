import { Story, Meta } from "@storybook/react"
import Tree from "components/Tree"
import { useEffect, useState } from "react"
import fakeData from "./treeFakeData.json"

export default {
  title: "Data Display/Tree", 
  component: Tree,
  subcomponents: {
    "Tree.Category": Tree.Category,
    "Tree.Item": Tree.Item
  },
  argTypes: {},
} as Meta

export const Default: Story = () => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  const handleSelect = (nodeIds: string[]) => {
    setSelected(nodeIds)
  }

  const handleToggle = (nodeIds: string[]) => {
    setExpanded(nodeIds)
  }

  return (
    <div style={{ width: "240px" }}>
      <Tree
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}>
        {fakeData.map(theme => (
          <Tree.Category
            key={theme.id}
            renderName={`${theme.name}(${theme.count})`}
            eventKey={theme.id}>
            {theme.category.map(category => (
              <Tree.Category
                key={category.id}
                renderName={`${category.name}(${category.count})`}
                eventKey={category.id}>
                {category.labels.map(label => (
                  <Tree.Item key={label.id} renderName={label.name} eventKey={label.id} />
                ))}
              </Tree.Category>
            ))}
          </Tree.Category>
        ))}
      </Tree>
    </div>
  )
}

export const SpecifyKey: Story = () => {
  const [expanded, setExpanded] = useState(["GE", "GE01"])
  const [selected, setSelected] = useState(["GE", "GE01", "BetPreferHour"])

  const handleSelect = (nodeIds: string[]) => {
    setSelected(nodeIds)
  }

  const handleToggle = (nodeIds: string[]) => {
    setExpanded(nodeIds)
  }

  return (
    <div style={{ width: "240px" }}>
      <Tree
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}>
        {fakeData.map(theme => (
          <Tree.Category
            key={theme.id}
            renderName={`${theme.name}(${theme.count})`}
            eventKey={theme.id}>
            {theme.category.map(category => (
              <Tree.Category
                key={category.id}
                renderName={`${category.name}(${category.count})`}
                eventKey={category.id}>
                {category.labels.map(label => (
                  <Tree.Item key={label.id} renderName={label.name} eventKey={label.id} />
                ))}
              </Tree.Category>
            ))}
          </Tree.Category>
        ))}
      </Tree>
    </div>
  )
}

export const DelaySetSelectedKey: Story = () => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  const handleSelect = (nodeIds: string[]) => {
    setSelected(nodeIds)
  }

  const handleToggle = (nodeIds: string[]) => {
    setExpanded(nodeIds)
  }

  useEffect(() => {
    setTimeout(() => {
      setSelected(["GE", "GE01", "BetPreferHour"])
      setExpanded(["GE", "GE01"])
    }, 3000)
  }, [])

  return (
    <div style={{ width: "240px" }}>
      <Tree
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}>
        {fakeData.map(theme => (
          <Tree.Category
            key={theme.id}
            renderName={`${theme.name}(${theme.count})`}
            eventKey={theme.id}>
            {theme.category.map(category => (
              <Tree.Category
                key={category.id}
                renderName={`${category.name}(${category.count})`}
                eventKey={category.id}>
                {category.labels.map(label => (
                  <Tree.Item key={label.id} renderName={label.name} eventKey={label.id} />
                ))}
              </Tree.Category>
            ))}
          </Tree.Category>
        ))}
      </Tree>
    </div>
  )
}