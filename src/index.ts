// import reportWebVitals from './reportWebVitals';

export { default as Avatar } from "./components/Avatar";
export type { AvatarProps } from "./components/Avatar";

export { default as Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { default as Icon } from "./components/Icon";

export { default as Breadcrumbs } from "./components/Breadcrumbs";
export type {
  BreadcrumbsProps,
  BreadcrumbsItemProps,
} from "./components/Breadcrumbs";

export { default as Button, LinkButton } from "./components/Button";
export type {
  ButtonProps,
  ButtonGroupProps,
  LinkButtonProps,
} from "./components/Button";

export { default as Tree } from "./components/Tree";

export { default as Collapse } from "./components/Collapse";
export type { CollapseProps } from "./components/Collapse";

export { default as Dropdown } from "./components/Dropdown";
export type {
  DropdownProps,
  DropdownSelectEventProps,
  DropdownActions,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownToggleProps,
} from "./components/Dropdown";

export {
  default as Form,
  InputGroup,
  Prepend,
  Append,
} from "./components/Form";
export type {
  FormProps,
  FormLabelProps,
  FormInputProps,
  FormTextareaProps,
  FormCheckboxProps,
  FormRadioProps,
  FormMessageProps,
  FormGroupProps,
  InputGroupProps,
  PrependProps,
  AppendProps,
} from "./components/Form";

export { default as DatePicker } from "./components/DatePicker";
export type { DatePickerProps } from "./components/DatePicker";

export { RangePicker } from "./components/DatePicker";
export type { RangePickerProps } from "./components/DatePicker";

export { default as Modal, CustomModal } from "./components/Modal";
export type {
  ModalProps,
  CustomModalProps,
  ModalHeaderProps,
  ModalFooterProps,
} from "./components/Modal";

export { default as Progress } from "./components/Progress";
export type { ProgressCircularProps, ProgressBarProps } from "./components/Progress";

export { default as Select } from "./components/Select";
export type { SelectProps, SelectOptionType } from "./components/Select";

// TODO: 打包後會發生 Uncaught TypeError: Cannot set properties of undefined (setting 'exports')，待解決
export { default as Table } from "./components/Table";
export type {
  TableProps,
  TableCellProps,
  TableColumnGroupProps,
} from "./components/Table";

export { default as Tabs } from "./components/Tabs";
export type { TabsProps, TabProps } from "./components/Tabs";

export { default as Tooltip } from "./components/Tooltip";
export type { TooltipProps, TooltipToggleProps } from "./components/Tooltip";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
