export type WithChildren = { children?: React.ReactNode }

export type ReplaceClassNameFromHTMLElement<T> = Omit<T, "className"> & {
  className?: string | { [key: string]: boolean }
}
