export { default as Badge } from "./components/Badge"
export type { BadgeProps } from "./components/Badge"

export { default as Breadcrumbs } from "./components/Breadcrumbs"
export type { BreadcrumbsProps, BreadcrumbsItemProps } from "./components/Breadcrumbs"

export { default as Button, LinkButton } from "./components/Button"
export type { ButtonProps, LinkButtonProps } from "./components/Button"

export { default as Dropdown } from "./components/Dropdown"
export type {
  DropdownProps,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownToggleProps,
} from "./components/Dropdown"

// TODO: 打包後會發生問題，待解決
// export { default as DatePicker, RangePicker } from "./components/DatePicker"
// export type { DatePickerProps, RangePickerProps } from "./components/DatePicker"

export { default as Form, InputGroup, Prepend, Append } from "./components/Form"
export type {
  FormProps,
  FormLabelProps,
  FormInputProps,
  FormTextareaProps,
  FormCheckboxProps,
  FormRadioProps,
  FormFeedbackProps,
  FormGroupProps,
  InputGroupProps,
  PrependProps,
  AppendProps,
} from "./components/Form"

// TODO: 降版 React 後需要調整
// export { default as Modal } from "./components/Modal"
// export type { ModalProps } from "./components/Modal"

// TODO: 打包後會發生 Uncaught TypeError: Cannot set properties of undefined (setting 'exports')，待解決
// export { default as Table } from "./components/Table"
// export type {
//   TableProps,
//   TableCellProps,
//   TableColumnProps,
//   TableColumnGroupProps,
// } from "./components/Table"

export { default as Tabs } from "./components/Tabs"
export type { TabsProps, TabProps } from "./components/Tabs"

export { default as Tooltip } from "./components/Tooltip"
export type { TooltipProps, TooltipToggleProps } from "./components/Tooltip"
