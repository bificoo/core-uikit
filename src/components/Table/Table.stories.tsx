import React, { useState } from "react"
import { Meta } from "@storybook/react"
import Table, { TableProps, TableCellProps, TablePaginationProps } from "components/Table"
import Form from "components/Form"
import Dropdown from "components/Dropdown"
import Button, { LinkButton } from "components/Button"
import fakeData from "./users.json"
import Tooltip from "../Tooltip"
import RsuiteTable from "rsuite/lib/Table"
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

export const DefaultTable = () => {
  return (
    <Table
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data)
      }}>
      <Column width={70} align="center">
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={200}>
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
      <Column width={140}>
        <HeaderCell>Action</HeaderCell>

        <Cell>
          {(rowData: usersProps) => {
            function handleAction() {
              alert(`id:${rowData.id}`)
            }
            return (
              <span>
                <LinkButton onClick={handleAction}>Edit</LinkButton>|
                <LinkButton onClick={handleAction}>Remove</LinkButton>
              </span>
            )
          }}
        </Cell>
      </Column>
    </Table>
  )
}

export const VirtualizedLargeTable = () => {
  return (
    <Table
      virtualized
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data)
      }}>
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={200}>
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

      <Column width={300}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
    </Table>
  )
}

export const ResizableTable = () => {
  return (
    <Table height={400} data={fakeData}>
      <Column width={70} align="center" resizable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={200}>
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

      <Column width={300}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
    </Table>
  )
}

export const FluidTable = () => {
  return (
    <Table height={400} data={fakeData}>
      <Column width={50} align="center">
        <HeaderCell>
          Id <code style={{ color: "#e96900" }}>flexGrow={1}</code>
        </HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100}>
        <HeaderCell>
          First Name <code style={{ color: "#e96900" }}>flexGrow={2}</code>
        </HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>
          City <code style={{ color: "#e96900" }}>flexGrow={1}</code>
        </HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>
          Company Name <code style={{ color: "#e96900" }}>flexGrow={2}</code>
        </HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
    </Table>
  )
}

type TableCellWithUserProps = Omit<TableCellProps, "rowData" | "dataKey"> & {
  rowData?: usersProps
  dataKey: keyof usersProps
}
const ActionCell = ({ rowData, dataKey, ...props }: TableCellWithUserProps) => {
  function handleAction() {
    rowData && alert(`id:${rowData[dataKey]}`)
  }
  return (
    <Cell {...props} className="link-group">
      <LinkButton onClick={handleAction}>Edit</LinkButton>
    </Cell>
  )
}

export const FixedColumnTable = () => {
  return (
    <Table
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data)
      }}>
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130}>
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

      <Column width={200}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey={"id"} />
      </Column>
    </Table>
  )
}

export const WordWrapTable = () => {
  return (
    <Table
      wordWrap
      height={400}
      data={fakeData}
      onRowClick={data => {
        console.log(data)
      }}>
      <Column width={70} align="center">
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130}>
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

      <Column width={200}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  )
}

const NameCell = ({ rowData, dataKey, ...props }: TableCellWithUserProps) => {
  if (!rowData) return null
  return (
    <Cell {...props}>
      <Tooltip
        arrow={false}
        position={["top left", "bottom left"]}
        keepTooltipInside="rs-table-body-row-wrapper">
        <Tooltip.Toggle>{rowData[dataKey].toLocaleString()}</Tooltip.Toggle>
        <Tooltip.Body>
          <div>
            <p>
              <b>Name:</b> {`${rowData.firstName} ${rowData.lastName}`}{" "}
            </p>
            <p>
              <b>Email:</b> {rowData.email}{" "}
            </p>
            <p>
              <b>Company:</b> {rowData.companyName}{" "}
            </p>
            <p>
              <b>Sentence:</b> {rowData.sentence}{" "}
            </p>
          </div>
        </Tooltip.Body>
      </Tooltip>
    </Cell>
  )
}

const ImageCell = ({ rowData, dataKey, ...props }: TableCellWithUserProps) => {
  if (!rowData) return null
  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginTop: 2,
          overflow: "hidden",
          display: "inline-block",
        }}>
        <img src="https://fakeimg.pl/44x44/" />
      </div>
    </Cell>
  )
}

const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: TableCellWithUserProps) => {
  if (!rowData) return null
  return (
    <Cell {...props} style={{ padding: 0 }}>
      <Form.Checkbox
        value={rowData[dataKey]}
        onChange={onChange}
        checked={checkedKeys.some((item: number) => item === rowData[dataKey])}
      />
    </Cell>
  )
}

export const CustomColumnTable = () => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([])

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedKeys = e.target.checked ? fakeData.map(item => item.id) : []
    setCheckedKeys(checkedKeys)
  }

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextCheckedKeys = e.target.checked
      ? [...checkedKeys, +e.target.value]
      : checkedKeys.filter(item => item !== +e.target.value)

    setCheckedKeys(nextCheckedKeys)
  }

  let checked = false

  if (checkedKeys.length === fakeData.length) {
    checked = true
  } else if (checkedKeys.length === 0) {
    checked = false
  }

  return (
    <div>
      <Table height={400} data={fakeData} id="table" rowHeight={72}>
        <Column width={50} align="center" verticalAlign="middle">
          <HeaderCell style={{ padding: 0 }}>
            <Form.Checkbox checked={checked} onChange={handleCheckAll} />
          </HeaderCell>
          <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
        </Column>
        <Column width={80} align="center" verticalAlign="middle">
          <HeaderCell>Avatar</HeaderCell>
          <ImageCell dataKey="avatar" />
        </Column>
        <Column width={160} verticalAlign="middle">
          <HeaderCell>First Name</HeaderCell>
          <NameCell dataKey="firstName" />
        </Column>
        <Column width={300} verticalAlign="middle">
          <HeaderCell>Email</HeaderCell>
          <Cell>
            {(rowData: usersProps) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a>}
          </Cell>
        </Column>
        <Column width={200} verticalAlign="middle">
          <HeaderCell>Action</HeaderCell>
          <ActionCell dataKey="id" />
        </Column>
      </Table>
    </div>
  )
}

export const SortTable = () => {
  const [sortColumn, setSortColumn] = useState<string | undefined>()
  const [sortType, setSortType] = useState<TableProps["sortType"] | undefined>()
  const [loading, setLoading] = useState(false)

  const getData = () => {
    if (sortColumn && sortType) {
      return fakeData.sort(
        (a: { [key: string]: number | string }, b: { [key: string]: number | string }) => {
          let x = a[sortColumn]
          let y = b[sortColumn]
          if (typeof x === "string") {
            x = x.charCodeAt(0)
          }
          if (typeof y === "string") {
            y = y.charCodeAt(0)
          }
          if (sortType === "asc") {
            return x - y
          } else {
            return y - x
          }
        },
      )
    }
    return fakeData
  }

  const handleSortColumn = (sortColumn: string, sortType: TableProps["sortType"]) => {
    setLoading(true)

    setTimeout(() => {
      setSortColumn(sortColumn)
      setSortType(sortType)
      setLoading(false)
    }, 500)
  }

  return (
    <div>
      <Table
        height={400}
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        onRowClick={data => {
          console.log(data)
        }}>
        <Column width={70} align="center" fixed sortable>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={130} fixed sortable>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130} sortable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>
      </Table>
    </div>
  )
}

export const PaginationTable = () => {
  const [loading, setLoading] = React.useState(false)
  const [limit, setLimit] = React.useState(2)
  const [page, setPage] = React.useState(1)

  const handleSelect = (dataKey: number) => {
    console.info("handleSelect", dataKey)
    setPage(dataKey)
  }

  const handleChangeLength = (dataKey: number) => {
    console.info("handleChangeLength", dataKey)
    setPage(1)
    setLimit(dataKey)
  }

  const data = fakeData.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit
    return i >= start && i < end
  })

  return (
    <div>
      <Table height={400} data={data} loading={loading}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>
      </Table>
      <RsuiteTable.Pagination
        lengthMenu={[
          {
            value: 2,
            label: 2,
          },
          {
            value: 4,
            label: 4,
          },
        ]}
        // prev
        // next
        // first
        // last
        // showLengthMenu
        // showInfo
        maxButtons={6}
        pages={fakeData.length / limit}
        activePage={page}
        displayLength={limit}
        total={fakeData.length}
        onSelect={handleSelect}
        onChangeLength={handleChangeLength}
      />
    </div>
  )
}
