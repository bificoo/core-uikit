import { Meta } from "@storybook/react"
import Table from "components/Table"
import users from "./users.json"

const { Column, HeaderCell, Cell, Pagination } = Table

type usersProps = {
  id: number
  avatar: string
  city: string
  email: string
  firstName: string
  lastName: string
  street: string
  zipCode: string
  date: string
  bs: string
  catchPhrase: string
  companyName: string
  words: string
  sentence: string
  stars: number
  followers: number
}

export default {
  title: "Data Display/Table",
  component: Table,
  argTypes: {
    className: {
      control: false,
    },
  },
} as Meta

export const Default = () => {
  return (
    <div>
      <Table
        height={400}
        data={users}
        onRowClick={data => {
          console.log(data)
        }}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200}>
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>

        <Column width={300}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={120} fixed="right">
          <HeaderCell>Action</HeaderCell>

          <Cell>
            {(rowData: usersProps) => {
              function handleAction() {
                alert(`id:${rowData.id}`)
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
                </span>
              )
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  )
}
